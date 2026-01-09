import { ProductFormErrors } from "@/lib/products/product-validate";

export type FormState = {
  success: boolean;
  message: string;
  errors?: ProductFormErrors;
};