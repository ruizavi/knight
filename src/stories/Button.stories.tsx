import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";
import { SVG } from "../components/icons/link";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select" },
    size: { control: "select" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secundary",
    children: "Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "ghost",
    size: "icon",
    children: <SVG />,
  },
};
