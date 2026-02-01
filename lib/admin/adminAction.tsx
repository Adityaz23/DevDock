"use server";

import { products } from "@/db/schema";
import { db } from "@/db/seed";
import { ProductType } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const approveProductAction = async (productId: ProductType["id"]) => {
  console.log("approved product", productId);
  //   adding this to the try and catch block ->
  try {
    await db
      .update(products)
      .set({ status: "approved" , approvedAt: new Date()})
      .where(eq(products.id, productId));
      revalidatePath("/admin")
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to approved the product!",
    };
  }
};
export const rejectProductAction = async (productId: ProductType["id"]) => {
  console.log("rejected product", productId);
  try {
    await db
      .update(products)
      .set({ status: "rejected" ,})
      .where(eq(products.id, productId));
      revalidatePath("/admin")
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to reject the product!",
    };
  }
};
