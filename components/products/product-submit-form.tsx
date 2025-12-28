"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function SubmitProductForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="My Awesome Project"
          required
          onChange={()=>{}} // if we need an onChange handler we do need the client component.
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          name="slug"
          placeholder="my-awesome-project"
          required
          onChange={()=>{}} // if we need an onChange handler we do need the client component.
        />
      </div>
    </form>
  );
}
