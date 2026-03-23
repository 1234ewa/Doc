import Link from "next/link";
import { cn } from "@/components/ui/cn";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/20";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-[#F6F3EA] shadow-md hover:-translate-y-0.5 hover:bg-accent hover:text-[#303854] hover:shadow-lg focus-visible:ring-primary",
  ghost:
    "bg-[#C2CDD5]/25 text-[#F6F3EA] backdrop-blur hover:bg-[#C2CDD5]/35 focus-visible:ring-[#F6F3EA]/40",
  outline:
    "border-2 border-primary bg-primary/5 text-primary hover:bg-primary hover:text-[#F6F3EA] focus-visible:ring-primary",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11",
  lg: "h-12 px-6 text-[0.92rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(base, sizes[size], variants[variant], className)}>
      {children}
      <span className="h-[1px] w-0 bg-current opacity-30 transition-all duration-300 group-hover:w-4" />
    </Link>
  );
}

