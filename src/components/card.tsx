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

const cardVariants = cva("", { variants: {}, defaultVariants: {} });

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
  ({ as, ...props }, ref) => {
    const Component = as || "header";

    return <Component ref={ref} {...props} />;
  }
);

const Title = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as, ...props }, ref) => {
    const Component = as || "h1";

    return <Component {...props} ref={ref} />;
  }
);

const Description = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ as, ...props }, ref) => {
  const Component = as || "p";

  return <Component {...props} ref={ref} />;
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
  ({ as, className, ...props }, ref) => {
    const Component = as || "section";

    return (
      <Component
        className={cn(cardVariants({ className }))}
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
