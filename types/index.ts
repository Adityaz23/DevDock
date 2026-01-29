import { products } from "@/db/schema";
import { ProductFormErrors } from "@/lib/products/product-validate";
import { InferSelectModel } from "drizzle-orm";

export type FormState = {
  success: boolean;
  message: string;
  errors?: ProductFormErrors;
};
export type ProductType = InferSelectModel<typeof products>