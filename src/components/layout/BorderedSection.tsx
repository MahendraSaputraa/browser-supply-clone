import { cn } from "@/lib/utils";

export default function BorderedSection({
  children,
  className,
  border = "border-gray-700/50",
}: {
  children: React.ReactNode;
  className?: string;
  border?: string;
}) {
  return (
    <div className="px-5 md:px-10">
      <div
        className={cn(
          "border-x mx-auto max-w-100 lg:max-w-360 px-5 md:px-10",
          border,
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
