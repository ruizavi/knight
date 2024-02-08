import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeNumber } from "..";

const meta = {
  title: "Badge",
  component: Badge,
  render: (args) => (
    <Badge {...args}>
      <BadgeNumber>3</BadgeNumber>
      Message
    </Badge>
  ),
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secundary: Story = {
  args: {
    variant: "secundary",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
  },
};
