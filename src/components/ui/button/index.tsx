import React from "react";

type ButtonVariant = "default" | "ghost" | "outline" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-blue-500 text-white hover:bg-blue-600",
  outline: "border border-gray-300 bg-white hover:bg-gray-50",
  ghost: "bg-transparent hover:bg-gray-100",
  link: "bg-transparent underline text-blue-600 hover:text-blue-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", asChild = false, className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded focus:outline-none";
    const classes = [base, variantClasses[variant], sizeClasses[size], className]
      .filter(Boolean)
      .join(" ");

    if (asChild && React.isValidElement(children)) {
      const child = React.Children.only(children) as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: [classes, child.props.className].filter(Boolean).join(" "),
        ...props,
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
