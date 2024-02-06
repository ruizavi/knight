import React from "react";

export interface Header extends React.HTMLAttributes<HTMLHeadElement> {}

export interface Title extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface Description
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export interface Content extends React.HTMLAttributes<HTMLElement> {}

export interface Footer extends React.HTMLAttributes<HTMLElement> {}

export interface As<
  T extends React.ElementType | string = keyof React.ElementType
> {
  as?: T;
}

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
