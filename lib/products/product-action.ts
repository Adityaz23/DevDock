"use server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./product-validate";
import { db } from "@/db/seed";
import { products } from "@/db/schema";
import z, { success } from "zod";
type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message: string;
};

export const addProductAction = async (
  prevState: FormState,
  formData: FormData
) => {
  console.log(formData);
  //Authenticating is the user is authenticated to submit the product or not ?
  // The organization id already exist in the clerk auth.
  try {
    const { userId, orgId } = await auth();
    console.log("USER ID:", userId);
    if (!userId) {
      return {
        success: false,
        message: "You must be signed in to submit a product!",
      };
    }
    if (!orgId) {
      return {
        success: false,
        message: "You must be a member of organization to submit a product.",
      };
    }

    // data :-
    const rawDataForm = Object.fromEntries(formData.entries());

    // now validating the data ->
    // using zod for the data schemas to be sceured with the typescript.
    const result = productSchema.safeParse(rawDataForm);

    if (!result.success) {
      const { fieldErrors } = result.error.flatten();

      console.log("FIELD ERRORS:", fieldErrors); // <-- You will now see output like screenshot

      return {
        success: false,
        errors: fieldErrors,
        message: "Invalid data",
      };
    }

    const { name, slug, description, tagline, tags, websiteUrl } = result.data;
    const tagsArray = tags ? tags.filter((tag) => typeof tag === "string") : [];
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0].emailAddress || "anonymous";
    // transforming the data ->
    await db.insert(products).values({
      name,
      slug,
      description,
      tagline,
      tags: tagsArray,
      websiteUrl,
      status: "pending",
      submittedBy: userEmail,
      organizationId: orgId, // we will put the logged in user to the organization would be able to create the products. We will create the organization id to the user in the proxy.ts file so it will be validate to those who are logged in.
      userId: "",
    });

    return {
      success: true,
      message: "Product submitted successfully! It will be approved shortly!",
    };

    // transforming the data :-
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Failed to submit product.",
      };
    }

    return {
      success: false,
      errors: error instanceof Error ? error.message : String(error),
      message: "Failed to add product.",
    };
  }
};
