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
        />
      </div>
    </form>
  );
}
