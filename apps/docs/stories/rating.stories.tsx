import type { Meta, StoryObj } from "@storybook/react"
import { Rating  } from "@ui-bookwise/ui";
import config from "@ui-bookwise/tailwind-config/tailwind.config"

const meta: Meta<typeof Rating> = {
  component: Rating,
  title: 'Rating',
  argTypes: {
    value: {
      description: 'Value of the rating'
    },
  },
  args: {
    value: 0,
    totalStars: 5,
    starsSize: 28,
    readonly: false,
    starsColor: config.theme.extend.colors.purple[100]
  }
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Basic: Story = {
  render: (props) => <Rating {...props} />,
  name: "Default",
};

export const ReadyOnly: Story = {
  render: (props) => <Rating {...props} />,
  name: "ReadOnly",
  args: {
    value: 4,
    totalStars: 5,
    starsSize: 16,
    readonly: true
  }
};