import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const buttonVariants = cva("rounded-full inline-flex items-center", {
  variants: {
    varient: {
      primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary",
      secondary: "",
      tertiary: ""
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12"
    }
  },
  defaultVariants: {
    varient: "primary",
    size: "medium"
  }
});

export const Button = ({
  children,
  className,
  href,
  varient,
  size
}: ButtonProps) => {
  return (
    <Link href={href} className={buttonVariants({ varient, size })}>
      {children}
    </Link>
  );
};
