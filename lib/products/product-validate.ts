import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  slug: z.string().min(1, "Slug is required"),
  tagline: z.string().min(1, "Tagline is required"),
  description: z.string().min(1, "Description is required"),
  websiteUrl: z.string().url("Must be a valid URL"),
  tags: z.string().min(1, "Tags are required"), // assuming comma-separated string
});

// This is the magic: infer types from the schema
export type ProductFormData = z.infer<typeof productSchema>;

// Define the exact error shape
export type ProductFormErrors = {
  name?: string[];
  slug?: string[];
  tagline?: string[];
  description?: string[];
  websiteUrl?: string[];
  tags?: string[];
  _form?: string[]; // for general errors
};
