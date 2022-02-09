import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { ReactComponent as Icon } from './icon.svg';

import { Link } from '@components/Button';

const inlineRadio = 'inline-radio';

export default {
  title: 'Ui kit/Buttons/Link',
  component: Link,
  argTypes: {
    isLoading: {
      type: 'boolean',
      defaultValue: false,
    },
    isDisabled: {
      type: 'boolean',
      defaultValue: false,
    },
    isInline: {
      type: 'boolean',
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button',
    },
    $type: {
      control: {
        type: inlineRadio,
        options: ['default', 'secondary', 'link', 'outlined'],
      },
      defaultValue: 'link',
    },
    icon: {
      table: {
        disable: true,
      },
    },
    iconAlign: {
      control: {
        type: inlineRadio,
        options: ['left', 'right'],
      },
    },
  },
};

const Template: Story<ComponentProps<typeof Link>> = (args) => <Link {...args} />;

export const Base = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <Icon />,
};
