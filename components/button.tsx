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
      primary: [
        "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] ease-in",
        "[&_.icon-wrapper]:ml-2",
      ],
      secondary: [
        "text-off-white bg-white/10 border border-transparent-white backdrop-filter-[12px] hover:bg-white/20 transition-colors ease-in",
        "[&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2",
      ],
      tertiary: "",
    },
    size: {
      small: "text-sm px-3 h-7",
      medium: "text-md px-4 h-8",
      large: "text-lg px-6 h-12",
    },
  },
  defaultVariants: {
    varient: "primary",
    size: "medium",
  },
});

export const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return <span className="icon-wrapper">{children}</span>;
};

export const Button = ({
  children,
  className,
  href,
  varient,
  size,
}: ButtonProps) => {
  return (
    <Link href={href} className={buttonVariants({ varient, size })}>
      {children}
    </Link>
  );
};
