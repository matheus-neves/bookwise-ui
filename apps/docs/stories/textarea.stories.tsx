import type { Meta, StoryObj } from "@storybook/react"
import { TextArea, TextAreaContainer } from "@ui-bookwise/ui";
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Textarea',
  args: {
    placeholder: 'Type your text',
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  render: (props) => {
    const [args, updateArgs] = useArgs();
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      const value = e.target.value;
      updateArgs({ ...args, value });
    }
    return (
      <TextAreaContainer>
        <TextArea {...props} onChange={handleChange} />
      </TextAreaContainer>
    )
  },
  name: "Counter on",
  args: {
    counter: true,
    value: '',
    maxLength: 1000
  }
};
