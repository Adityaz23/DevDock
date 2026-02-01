"use server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./product-validate";
import { db } from "@/db/seed";
import { products } from "@/db/schema";
import z from "zod";
import { FormState } from "@/types";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addProductAction = async (
  prevState: FormState,
  formData: FormData,
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
        errors: fieldErrors,
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
      userId: userId,
    });
    // refresh();
    revalidatePath("/");
    revalidatePath("/explore");
    revalidatePath("/admin");
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

// Now, creating a function for the upvote action :-

export const voteProductAction = async (productId: number) => {
  try {
    // before user can vote we need to check if the user is authenticated or not.
    const { userId, orgId } = await auth();
    if (!userId) {
      console.log("User not authenticated: ", userId);
      return {
        success: false,
        message: "You must be signed in to vote!",
      };
    }
    if (!orgId) {
      console.log("USer not a part of organization:", orgId);
      return {
        success: false,
        message: "You must be a part of an organization to vote!",
      };
    }
    // if the user is authenticated then we can proceed with the voting logic.
    // We will increment the vote count of the product with the given productId.
    await db
      .update(products)
      .set({
        voteCount: sql`GREATEST(0, ${products.voteCount} + 1)`,
      })
      .where(eq(products.id, productId));
    // refresh(); // to refresh the cache and show updated vote count.
    revalidatePath("/"); // revalidating the home page to show updated vote count.
    return {
      success: true,
      message: "Vote recorded successfully!",
    };
  } catch (error) {
    console.error("Voting error: ", error);
    return {
      success: false,
      message: "Something went wrong while voting. Please try again!",
      voteCount: 0,
    };
  }
};

// Now for the downlvoting action we can create a similar function as above.
export const downVoteAction = async (productId: number) => {
  try {
    const { userId, orgId } = await auth();
    if (!userId) {
      console.log("User not authenticated: ", userId);
      return {
        success: false,
        message: "You must be signed in to downvote!",
      };
    }
    if (!orgId) {
      console.log("User not a part of organization: ", orgId);
      return {
        success: false,
        message: "You must be a part of an organization to downvote!",
      };
    }
    // same logic as upvoting but we will decrement the vote count.
    await db
      .update(products)
      .set({
        voteCount: sql`GREATEST(0, ${products.voteCount} - 1)`,
      })
      .where(eq(products.id, productId));
    revalidatePath("/"); // revalidating the home page to show updated vote count.
    return {
      success: true,
      message: "Downvote recorded successfully!",
    };
  } catch (error) {
    console.error("Downvoting error: ", error);
    return {
      success: false,
      message: "Something went wrong while downvoting. Please try again!",
      voteCount: 0,
    };
  }
};
