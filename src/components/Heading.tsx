import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}
export function Heading({ size = "md", children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx("Heading-gray-100 font-bold font-sans", {
        "Heading-lg": size === "sm",
        "Heading-xl": size === "md",
        "Heading-2xl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
