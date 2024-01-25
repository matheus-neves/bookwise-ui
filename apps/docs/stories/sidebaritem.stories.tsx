import type { Meta, StoryObj } from "@storybook/react"
import { SidebarItem  } from "@ui-bookwise/ui";
import { ChartLineUp } from "@phosphor-icons/react";

const meta: Meta<typeof SidebarItem> = {
  component: SidebarItem,
  title: 'SidebarItem'
};

export default meta;

type Story = StoryObj<typeof SidebarItem>;

export const Basic: Story = {
  render: (props) => <SidebarItem {...props} />,
  name: "Default",
  args: {
    icon: <ChartLineUp size={24} />,
    text: 'Home',
  }
};

export const Selected: Story = {
  render: (props) => <SidebarItem {...props} />,
  name: "Selected",
  args: {
    icon: <ChartLineUp size={24} />,
    text: 'Home',
    selected: true
  }
};
