import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react"
import { CustomLink  } from "@ui-bookwise/ui";

const meta: Meta<typeof CustomLink> = {
  component: CustomLink,
  title: 'Custom Link',
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium'],
      defaultValue: 'small'
    },
    color: {
      control: 'radio',
      options: ['white', 'purple'],
      defaultValue: 'white'
    },
    prevIcon: {
      control: 'select',
      options: ['CaretRightIcon', 'CaretLeftIcon'],
      mapping: {
        CaretRightIcon: <CaretRight />,
        CaretLeftIcon: <CaretLeft />
      }
    },
    nextIcon: {
      control: 'select',
      options: ['CaretRightIcon', 'CaretLeftIcon'],
      mapping: {
        CaretRightIcon: <CaretRight />,
        CaretLeftIcon: <CaretLeft />
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof CustomLink>;
export const Primary: Story = {
  render: (props) => <CustomLink {...props} />,
  name: "Default",
  args: {
    children: 'Example'
  }
};

export const PrevIcon: Story = {
  render: (props) => <CustomLink {...props} />,
  name: "Prev Icon",
  args: {
    children: 'Example',
    prevIcon: <CaretRight />
  }
};

export const NextIcon: Story = {
  render: (props) => <CustomLink {...props} />,
  name: "Next Icon",
  args: {
    children: 'Example',
    nextIcon: <CaretRight />,
    color: 'purple'
  }
};

export const WithIcon: Story = {
  render: (props) => <CustomLink {...props} />,
  name: "Both Icons",
  args: {
    children: 'Example',
    prevIcon: <CaretRight />,
    nextIcon: <CaretRight />,
    size: 'medium'
  }
};
