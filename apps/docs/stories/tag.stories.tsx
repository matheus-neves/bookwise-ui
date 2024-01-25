import type { Meta, StoryObj } from "@storybook/react"
import { Tag  } from "@ui-bookwise/ui";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Tag',
  args: {
    label: 'Example',
    isSelected: false
  },
  argTypes: {
    onSelect: {
      description: 'Select handler',
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A Tag component for filtering items.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;
export const Basic: Story = {
  render: (props) => <Tag {...props} />,
  name: "Basic",
  parameters: {
    docs: {
      storyDescription: 'The basic usage of the Tag component.',
    },
  },
};

export const Selected: Story = {
  render: (props) => <Tag {...props} />,
  name: "Selected",
  args: {
    isSelected: true,
  },
};