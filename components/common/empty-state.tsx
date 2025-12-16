import { LucideIcon } from "lucide-react";

export default function EmptyRecently({
  message,
  icon: Icon,
}: {
  icon?: LucideIcon;
  message: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      {Icon && (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted/30">
          <Icon className="h-7 w-7 text-muted-foreground" />
        </div>
      )}

      <p className="max-w-sm text-sm sm:text-base text-muted-foreground">
        {message}
      </p>
    </div>
  );
}
