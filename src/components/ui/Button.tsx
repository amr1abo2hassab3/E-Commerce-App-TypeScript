import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import type { ReactNode } from "react";
import { tailwindCMerge } from "../../lib/utils";

const ButtonVariants = cva(
  [
    "rounded-md",
    "block",
    "flex item-center justify-center",
    "duration-200",
    "cursor-pointer",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-regal-blue dark:bg-whtie",
          "text-white dark:text-balck",
          "border-transparent",
        ],
        secondary: ["bg-white", "text-gray-800", "border-gray-400"],
      },
      size: {
        sm: ["text-sm", "px-2", "py-1"],
        md: ["text-base", "px-3", "py-2"],
        lg: ["text-lg", "px-4", "py-3"],
      },
      fullWidht: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "sm",
    },
  }
);

interface Iprops
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: ReactNode;
}

const Button = ({ children, intent, size, fullWidht, ...rest }: Iprops) => {
  return (
    <button
      className={`${tailwindCMerge(
        ButtonVariants({ intent: intent, size: size, fullWidht: fullWidht })
      )}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
