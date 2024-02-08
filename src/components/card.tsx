import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import {
  As,
  Content,
  Description,
  Footer,
  Header,
  HeadingType,
  Title,
} from "../utils/interfaces";
import { cn } from "../utils/cn";

const cardVariants = cva("p-6 rounded-md", {
  variants: {
    shadow: {
      none: "shadow-[0px_0px_5px_0px_#00000024] border border-oxford",
      ligth: "shadow-[0px_0px_30px_0px_#00000024]",
      medium: "shadow-[0px_0px_15px_5px_#00000024]",
      hard: "shadow-[0px_0px_7px_3px_#00000024]",
    },
  },
  defaultVariants: {
    shadow: "ligth",
  },
});

interface CardHeaderProps extends Header, As<"header"> {}
interface CardTitleProps extends Title, As<HeadingType> {}
interface CardDescriptionProps extends Description, As<"p"> {}
interface CardContentProps extends Content, As<"article"> {}
interface CardFooterProps extends Footer, As<"footer"> {}

interface CardProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof cardVariants>,
    As<"section"> {}

const Header = React.forwardRef<HTMLHeadElement, CardHeaderProps>(
  ({ as, className, ...props }, ref) => {
    const Component = as || "header";

    const style = `pb-2`;

    return <Component ref={ref} className={cn(style, className)} {...props} />;
  }
);

const Title = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as, className, ...props }, ref) => {
    const Component = as || "h1";

    const style = `text-xl font-bold`;

    return <Component {...props} className={cn(style, className)} ref={ref} />;
  }
);

const Description = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ as, className, ...props }, ref) => {
  const Component = as || "p";

  const style = `text-oxford text-sm font-light`;

  return <Component {...props} className={cn(style, className)} ref={ref} />;
});

const Content = React.forwardRef<HTMLElement, CardContentProps>(
  ({ as, ...props }, ref) => {
    const Component = as || "article";

    return <Component {...props} ref={ref} />;
  }
);

const Footer = React.forwardRef<HTMLElement, CardFooterProps>(
  ({ as, ...props }, ref) => {
    const Component = as || "footer";

    return <Component {...props} ref={ref} />;
  }
);

const Base = React.forwardRef<HTMLElement, CardProps>(
  ({ as, className, shadow, ...props }, ref) => {
    const Component = as || "section";

    return (
      <Component
        className={cn(cardVariants({ className, shadow }))}
        ref={ref}
        {...props}
      />
    );
  }
);

interface CardComponent
  extends React.ForwardRefExoticComponent<
    CardProps & React.RefAttributes<HTMLElement>
  > {
  Header: typeof Header;
  Title: typeof Title;
  Description: typeof Description;
  Content: typeof Content;
  Footer: typeof Footer;
}

const Card = {
  ...Base,
  Header,
  Title,
  Description,
  Content,
  Footer,
} as CardComponent;

export { Card, cardVariants };
