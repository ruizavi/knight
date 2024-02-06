import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";

const calloutVariants = cva(
  "p-4 m-4 [&>header]:flex [&>header]:pb-4 [&>header]:font-bold [&>header>picture>svg]:w-[24px] [&>header>picture>svg]:h-[24px] [&>header>picture]:pr-4 rounded bg-opacity-60",
  {
    variants: {
      variant: {
        info: "bg-polar-400",
        success: "bg-sandrift-500",
        warning: "bg-cosmic-700",
        error: "bg-night-shadz-700",
        themeless: "bg-amethyst-smoke-500",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

interface CalloutIconProps extends React.HTMLAttributes<HTMLElement> {}

const Icon = React.forwardRef<HTMLElement, CalloutIconProps>((props, ref) => {
  const Component = "picture";

  return <Component ref={ref} {...props} />;
});

interface CalloutTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Title = React.forwardRef<HTMLHeadingElement, CalloutTitleProps>(
  (props, ref) => {
    const Component = "h1";

    return <Component ref={ref} {...props} />;
  }
);

interface CalloutHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {}

const Header = React.forwardRef<HTMLHeadElement, CalloutHeaderProps>(
  (props, ref) => {
    const Component = "header";

    return <Component ref={ref} {...props} />;
  }
);

interface CalloutMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const Content = React.forwardRef<HTMLParagraphElement, CalloutMessageProps>(
  (props, ref) => {
    const Component = "p";

    return <Component ref={ref} {...props} />;
  }
);

export interface CalloutProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof calloutVariants> {}

const Base = React.forwardRef<HTMLElement, CalloutProps>(
  ({ className, variant, ...props }, ref) => {
    const Component = "section";

    return (
      <Component
        className={cn(calloutVariants({ className, variant }))}
        ref={ref}
        {...props}
      />
    );
  }
);

interface CalloutComponent
  extends React.ForwardRefExoticComponent<
    CalloutProps & React.RefAttributes<HTMLDivElement>
  > {
  Header: typeof Header;
  Icon: typeof Icon;
  Title: typeof Title;
  Content: typeof Content;
}

const Callout = {
  ...Base,
  Header,
  Title,
  Icon,
  Content,
} as CalloutComponent;

export { Callout, calloutVariants };
