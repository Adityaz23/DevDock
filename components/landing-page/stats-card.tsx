import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function Stats({
  icon: Icon,
  label,
  value,
  hasBorder,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}) {
  return (
    <div className={cn("space-y-2", hasBorder && "border-x border-border/50")}>
      <div className="flex items-center justify-center gap-2">
        <Icon className="size-5 text-amber-300" />
        <p className="text-5xl sm:text-4xl font-extralight">{value}</p>
      </div>
      <p className="text-sm text-center font-bold text-fuchsia-200">{label}</p>
    </div>
  );
}
