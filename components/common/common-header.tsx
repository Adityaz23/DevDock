import { LucideIcon } from "lucide-react";
export default function FeaturedHeader({
  title,
  icon: Icon,
  description
}: {
  title: string;
  icon: LucideIcon;
  description: string
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="size-6 text-purple-600 animate-[spin_3s_linear-1]"/>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-lg text-primary">{description}</p>
    </div>
  );
}
