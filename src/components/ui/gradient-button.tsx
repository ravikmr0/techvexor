import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

export function GradientButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white font-semibold transition-all",
        className,
      )}
      {...props}
    />
  );
}
