import { X } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react"
import tailwindConfig from "@ui-bookwise/tailwind-config/tailwind.config";
import { IconButton  } from "@ui-bookwise/ui";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Icon Button'
};
export default meta;

type PrimaryStory = StoryObj<typeof IconButton>;
export const Primary: PrimaryStory = {
  render: (props) => <IconButton {...props} />,
  name: "Primary",
  args: {
    children: <X size={24} color={tailwindConfig.theme.extend.colors.purple[100]} />
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'transparent']
    }
  }
};

type Transparent = StoryObj<typeof IconButton>;
export const Transparent: Transparent = {
  render: (props) => <IconButton {...props} />,
  name: "Transparent",
  args: {
    children: <X size={24} color={tailwindConfig.theme.extend.colors.gray[400]} />,
    color: 'transparent'
  }
};