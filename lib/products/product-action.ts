"use server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./product-validate";
import { db } from "@/db/seed";
import { products } from "@/db/schema";
import z, { success } from "zod";
import { FormState } from "@/types";

export const addProductAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  try {
    const { userId, orgId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "You must be signed in to submit a product!",
      };
    }

    if (!orgId) {
      return {
        success: false,
        message: "You must be part of an organization to submit a product.",
      };
    }

    const rawDataForm = Object.fromEntries(formData.entries());

    const result = productSchema.safeParse(rawDataForm);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      // Now TypeScript knows the shape!
      return {
        success: false,
        message: "Please fix the errors below",
        errors: fieldErrors, // No cast needed — TS knows it's ProductFormErrors
      };
    }

    const { name, slug, description, tagline, tags, websiteUrl } = result.data;

    // If tags is a comma-separated string
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress || "anonymous";

    await db.insert(products).values({
      name,
      slug,
      description,
      tagline,
      tags: tagsArray,
      websiteUrl,
      status: "pending",
      submittedBy: userEmail,
      organizationId: orgId,
      userId: userId, // you had "" before — better to use actual userId
    });

    return {
      success: true,
      message: "Product submitted successfully! It will be approved shortly!",
    };
  } catch (error) {
    console.error("Product submission error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.flatten().fieldErrors,
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
      errors: {
        _form: ["An unexpected error occurred."],
      },
    };
  }
};
