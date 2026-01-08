"use client";
import { Loader2Icon, LoaderIcon, SparklesIcon } from "lucide-react";
import FormField from "../forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-action";
import { Suspense, useActionState } from "react";
import { FormState } from "@/types";
import { cn } from "@/lib/utils";
const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};
export default function SubmitProductForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState
  );
  const { errors, message, success } = state;
  return (
    <Suspense
      fallback={
        <div>
          <LoaderIcon className="size-4 animate-spin" />
          <span>Loading submit form</span>
        </div>
      }
    >
      <form className="space-y-6" action={formAction} noValidate>
        {message && (
          <div
            className={cn(
              "p-4 border rounded-lg",
              success
                ? "bg-primary/10 border-primary text-primary"
                : "bg-destructive/10 border-destructive text-destructive"
            )}
            role="alert"
            aria-live="polite"
          >
            {message}
          </div>
        )}
        <FormField
          label="Product Name"
          name="name"
          id="name"
          placeholder="My Awesome Project"
          required
          onChange={() => {}}
          error={errors?.name}
        ></FormField>
        <FormField
          label="slug"
          name="slug"
          id="slug"
          placeholder="my-awesome-project"
          required
          onChange={() => {}}
          error={errors?.slug}
          // the helper text ->
          helperText="URL friendly version for your porject slug."
        ></FormField>
        <FormField
          label="Tagline"
          name="tagline"
          id="tagline"
          placeholder="A brief description about your project."
          required
          onChange={() => {}}
          error={errors?.tagline}
        ></FormField>
        <FormField
          label="Description"
          name="description"
          id="description"
          placeholder="Tell us more about your project."
          required
          onChange={() => {}}
          error={errors?.description}
          textarea
          helperText="Explain what your project does basically."
        ></FormField>
        <FormField
          label="Website URL"
          name="websiteUrl"
          id="websiteUrl"
          placeholder="https://yourproduct.com"
          required
          onChange={() => {}}
          error={errors?.websiteUrl}
          helperText="Enter your project website url or landing page."
        ></FormField>
        <FormField
          label="Tags"
          name="tags"
          id="tags"
          placeholder="Docker, CI/CD pipelines, TailwindCSS etc...."
          required
          onChange={() => {}}
          error={errors?.tags}
          helperText="Comma seprated tags (Nextjs,React,Redux)"
        ></FormField>
        <Button type="submit" size="lg" className="w-full">
          {isPending ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            <SparklesIcon className="size-4" />
          )}
          Submit Product!
        </Button>
      </form>
    </Suspense>
  );
}
