import { MagnifyingGlass } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react"
import { TextInput, TextInputContainer, TextInputIconWrapper } from "@ui-bookwise/ui";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'TextInput'
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  render: (props) => (
    <TextInputContainer>
      <TextInput {...props} />
      <TextInputIconWrapper>
        <MagnifyingGlass size={20} />
      </TextInputIconWrapper>
    </TextInputContainer>
  ),
  name: "All features on",
  args: {
    placeholder: 'Placeholder',
  },
};

type StoryWithoutIcon = StoryObj<typeof TextInput>;

export const StoryWithoutIcon: StoryWithoutIcon = {
  render: (props) => (
    <TextInputContainer>
      <TextInput {...props} />
    </TextInputContainer>
  ),
  name: "Without Icon",
  args: {
    placeholder: 'Placeholder',
  },
};


type StoryInputContainer = StoryObj<typeof TextInputContainer>;

export const StoryInputContainer: StoryInputContainer = {
  render: (props) => (
    <TextInputContainer {...props}>
      <TextInput />
    </TextInputContainer>
  ),
  name: "Text Input Container",
}

type StoryInputIconWrapper = StoryObj<typeof TextInputIconWrapper>;

export const StoryInputIconWrapper: StoryInputIconWrapper = {
  render: (props) => (
    <TextInputIconWrapper {...props}>
      <MagnifyingGlass size={20} />
    </TextInputIconWrapper>
  ),
  name: "Input Icon Wrapper"
}
