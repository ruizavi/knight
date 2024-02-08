import { Meta, StoryObj } from "@storybook/react";
import { Card } from "..";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/card";

const meta = {
  title: "Card",
  component: Card,
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, animi
        eum, ipsum ipsam pariatur perferendis ut provident consequatur earum ab
        inventore! Magnam earum cum voluptates.
      </CardContent>
      <CardFooter>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
        nisi.
      </CardFooter>
    </Card>
  ),
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: "select",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const None: Story = {
  args: {
    shadow: "none",
    className: "w-[350px]",
  },
};

export const Ligth: Story = {
  args: {
    shadow: "ligth",
    className: "w-[350px]",
  },
};

export const Medium: Story = {
  args: {
    shadow: "medium",
    className: "w-[350px]",
  },
};

export const Hard: Story = {
  args: {
    shadow: "hard",
    className: "w-[350px]",
  },
};
