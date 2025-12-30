"use client";

import { Loader2Icon, SparklesIcon } from "lucide-react";
import FormField from "../forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-action";
import { useActionState } from "react";
const initialState = {
  success: false,
  message: "",
  error: {},
};
export default function SubmitProductForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState
  );
  return (
    <form className="space-y-6" action={formAction}>
      <FormField
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Awesome Project"
        required
        onChange={() => {}}
        error=""
      ></FormField>
      <FormField
        label="slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-project"
        required
        onChange={() => {}}
        error=""
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
        error=""
      ></FormField>
      <FormField
        label="Description"
        name="description"
        id="description"
        placeholder="Tell us more about your project."
        required
        onChange={() => {}}
        error=""
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
        error=""
        helperText="Enter your project website url or landing page."
      ></FormField>
      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="Docker, CI/CD pipelines, TailwindCSS etc...."
        required
        onChange={() => {}}
        error=""
        helperText="Comma seprated tags (Nextjs,React,Redux)"
      ></FormField>
      <Button type="submit" size="lg" className="w-full">
        {isPending ? <Loader2Icon className="size-4 animate-spin"/>:(<SparklesIcon className="size-4"/>)}
        Submit Product!
      </Button>
    </form>
  );
}
