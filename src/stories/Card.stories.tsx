import { Meta, StoryObj } from "@storybook/react";
import { Card } from "..";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    shadow: { control: "select" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const None: Story = {
  args: {
    shadow: "none",
    className: "w-[350px]",
    children: (
      <>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
        </Card.Header>
        <Card.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, animi
          eum, ipsum ipsam pariatur perferendis ut provident consequatur earum
          ab inventore! Magnam earum cum voluptates.
        </Card.Content>
        <Card.Footer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          nisi.
        </Card.Footer>
      </>
    ),
  },
};

export const Ligth: Story = {
  args: {
    shadow: "ligth",
    className: "w-[350px]",
    children: (
      <>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
        </Card.Header>
        <Card.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, animi
          eum, ipsum ipsam pariatur perferendis ut provident consequatur earum
          ab inventore! Magnam earum cum voluptates.
        </Card.Content>
        <Card.Footer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          nisi.
        </Card.Footer>
      </>
    ),
  },
};

export const Medium: Story = {
  args: {
    shadow: "medium",
    className: "w-[350px]",
    children: (
      <>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
        </Card.Header>
        <Card.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, animi
          eum, ipsum ipsam pariatur perferendis ut provident consequatur earum
          ab inventore! Magnam earum cum voluptates.
        </Card.Content>
        <Card.Footer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          nisi.
        </Card.Footer>
      </>
    ),
  },
};

export const Hard: Story = {
  args: {
    shadow: "hard",
    className: "w-[350px]",
    children: (
      <>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
        </Card.Header>
        <Card.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, animi
          eum, ipsum ipsam pariatur perferendis ut provident consequatur earum
          ab inventore! Magnam earum cum voluptates.
        </Card.Content>
        <Card.Footer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          nisi.
        </Card.Footer>
      </>
    ),
  },
};
