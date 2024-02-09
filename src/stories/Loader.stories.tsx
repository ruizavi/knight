import { Meta, StoryObj } from "@storybook/react";
import { Loader } from "..";

const meta = {
  title: "Loader",
  component: Loader,
  render: (args) => <Loader {...args} />,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flower: Story = {
  args: {},
};
