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

interface CardProps
  extends React.HTMLAttributes<HTMLElement>,
    As<"section">,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLElement, CardProps>(
  ({ as, className, shadow, ...props }, ref) => {
    const C = as ?? "section";

    return (
      <C
        {...props}
        className={cn(cardVariants({ shadow, className }))}
        ref={ref}
      />
    );
  }
);

Card.displayName = "Card";

const cardHeaderVariants = cva("pb-2");

interface CardHeaderProps extends Header, As<"header"> {}

const CardHeader = React.forwardRef<HTMLHeadElement, CardHeaderProps>(
  ({ as, className, ...props }, ref) => {
    const Component = as || "header";

    return (
      <Component
        ref={ref}
        className={cn(cardHeaderVariants({ className }))}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "Card.Header";

const cardTitleVariants = cva("text-xl font-bold");

interface CardTitleProps extends Title, As<HeadingType> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as, className, ...props }, ref) => {
    const Component = as || "h1";

    return (
      <Component
        {...props}
        className={cn(cardTitleVariants({ className }))}
        ref={ref}
      />
    );
  }
);

CardTitle.displayName = "Card.Title";

const cardDescriptionsVariants = cva("text-oxford text-sm font-light");

interface CardDescriptionProps extends Description, As<"p"> {}

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ as, className, ...props }, ref) => {
  const Component = as || "p";

  return (
    <Component
      {...props}
      className={cn(cardDescriptionsVariants({ className }))}
      ref={ref}
    />
  );
});

CardDescription.displayName = "Card.Description";

interface CardContentProps extends Content, As<"article"> {}

const CardContent = React.forwardRef<HTMLElement, CardContentProps>(
  ({ as, ...props }, ref) => {
    const Component = as || "article";

    return <Component {...props} ref={ref} />;
  }
);

CardContent.displayName = "Card.Content";

interface CardFooterProps extends Footer, As<"footer"> {}

const CardFooter = React.forwardRef<HTMLElement, CardFooterProps>(
  ({ as, ...props }, ref) => {
    const Component = as || "footer";

    return <Component {...props} ref={ref} />;
  }
);

CardFooter.displayName = "Card.Footer";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
};
