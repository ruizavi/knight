import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Static: Story = {
  args: {
    variant: "static",
    placeholder: "Static",
    label: "Static",
  },
};

export const Standard: Story = {
  args: {
    variant: "standard",
    placeholder: "Standard",
    label: "Standard",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    placeholder: "Outline",
    label: "Outline",
  },
};
