import '../styles/globals.css'
import config from '@ui-bookwise/tailwind-config/tailwind.config'
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: config.theme.extend.colors.gray['100'] },
        { name: 'dark', value: '#000' },
      ],
    },
  },
};

export default preview;