import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(120, { message: "Name must be less than 120 characters." }),

  slug: z
    .string()
    .min(5, { message: "Slug must be at least 5 characters." })
    .max(150, { message: "Slug must be less than 150 characters." })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug can only contain lowercase letters, numbers, and hyphens.",
    }),

  tagline: z
    .string()
    .max(200, { message: "Tagline must be less than 200 characters." }),

  description: z.string().optional(),

  websiteUrl: z
    .string()
    .url({ message: "Please enter a valid website URL (https://...)" }),

  tags: z
    .string()
    .min(1, { message: "Tags are required!" })
    .transform((val) =>
      val
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0)
    )
    .refine((tags) => tags.length > 0, {
      message: "Please enter at least one valid tag.",
    }),
});
