import { Meta, StoryObj } from "@storybook/react";
import {
  Callout,
  CalloutHeader,
  CalloutIcon,
  CalloutMessage,
  CalloutTitle,
} from "..";
import { SVG } from "../components/icons/link";

const meta = {
  title: "Callout",
  component: Callout,
  render: (args) => (
    <Callout {...args}>
      <CalloutHeader>
        <CalloutIcon>
          <SVG />
        </CalloutIcon>
        <CalloutTitle>Information</CalloutTitle>
      </CalloutHeader>
      <CalloutMessage>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit
        amet,consectetur, adipisci velit...
      </CalloutMessage>
    </Callout>
  ),
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select" },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof Callout>;

export const Info: Story = {
  args: {
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
  },
};

export const Themeless: Story = {
  args: {
    variant: "themeless",
  },
};
