import FeaturedHeader from "@/components/common/common-header";
import SubmitProductForm from "@/components/products/product-submit-form";
import { SparklesIcon } from "lucide-react";

export default function Submit() {
  return (
    <section className="py-20">
      <div className="px-12 mx-auto sm:px-4 lg:px-8">
        <FeaturedHeader
          title="Submit Your Product"
          icon={SparklesIcon}
          description="Share your creation with the community.Your submission will be reviewed before going live."
        />
        <div className="max-w-2xl mx-auto">
          <SubmitProductForm />
        </div>
      </div>
    </section>
  );
}
