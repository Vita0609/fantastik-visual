import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-satoshi-bold animate overflow-hidden relative before:absolute before:content-[attr(data-content)] before:text-white before:left-0 before:top-0 before:w-full before:h-full before:flex before:items-center before:justify-center before:animate hover:before:-top-full after:absolute after:content-[attr(data-content)] after:text-white after:left-0 after:-bottom-full after:w-full after:h-full after:flex after:items-center after:justify-center after:animate after:hover:bottom-0",
  {
    variants: {
      variant: {
        linear:
          "h-10 px-8 lg:h-[54px] lg:px-[160px] bg-gradient-to-r from-blue to-purple hover:to-blue",
        blue: "h-[38px] p-[13px] bg-blue",
        outline:
          "h-[38px] px-[23px] lg:h-11 lg:px-[30px] border-2 border-white hover:bg-blue hover:border-blue",
        transparent: "h-[38px] p-[7px]",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  "data-content"?: string | null | undefined;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, className }),
          props["data-content"] ? "text-transparent" : null
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };