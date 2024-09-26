import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const buttonVariants = cva("", {
  variants: {
    varient: {
      primary: "bg-white text-black",
      secondary: "bg-black text-white",
      tertiary: "bg-transparent text-white"
    }
  }
});

export const Button = ({ children, className, href, varient }: ButtonProps) => {
  return (
    <Link href={href} className={buttonVariants({ varient })}>
      {children}
    </Link>
  );
};
