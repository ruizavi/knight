import { Meta, StoryObj } from "@storybook/react";
import { Callout } from "..";
import { SVG } from "../components/icons/link";

const meta = {
  title: "Callout",
  component: Callout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select" },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: "info",
    children: (
      <>
        <Callout.Header>
          <Callout.Icon>
            <SVG />
          </Callout.Icon>
          <Callout.Title>Information</Callout.Title>
        </Callout.Header>
        <Callout.Message>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet,consectetur, adipisci velit...
        </Callout.Message>
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: (
      <>
        <Callout.Header>
          <Callout.Icon>
            <SVG />
          </Callout.Icon>
          <Callout.Title>Success</Callout.Title>
        </Callout.Header>
        <Callout.Message>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet,consectetur, adipisci velit...
        </Callout.Message>
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: (
      <>
        <Callout.Header>
          <Callout.Icon>
            <SVG />
          </Callout.Icon>
          <Callout.Title>Warning</Callout.Title>
        </Callout.Header>
        <Callout.Message>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet,consectetur, adipisci velit...
        </Callout.Message>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: (
      <>
        <Callout.Header>
          <Callout.Icon>
            <SVG />
          </Callout.Icon>
          <Callout.Title>Error</Callout.Title>
        </Callout.Header>
        <Callout.Message>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet,consectetur, adipisci velit...
        </Callout.Message>
      </>
    ),
  },
};

export const Themeless: Story = {
  args: {
    variant: "themeless",
    children: (
      <>
        <Callout.Header>
          <Callout.Icon>
            <SVG />
          </Callout.Icon>
          <Callout.Title>Themeless</Callout.Title>
        </Callout.Header>
        <Callout.Message>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet,consectetur, adipisci velit...
        </Callout.Message>
      </>
    ),
  },
};
