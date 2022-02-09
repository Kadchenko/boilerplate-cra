import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { ReactComponent as Icon } from './icon.svg';

import { Button, Link } from '@components/Button';

const inlineRadio = 'inline-radio';

const Header = styled.h4`
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;

  button + button,
  button + a,
  a + button,
  a + a {
    margin-left: 20px;
  }
`;

const Block = styled.div`
  margin-bottom: 20px;
`;

export default {
  title: 'Ui kit/Buttons/All',
  component: Button,
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
      defaultValue: 'Button / default',
    },
    $type: {
      control: {
        type: inlineRadio,
        options: ['default', 'secondary', 'link', 'outlined'],
      },
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

export const All: Story<ComponentProps<typeof Button>> = (args) => (
  <div>
    <Block>
      <Header>Default (controlled)</Header>
      <Row>
        <Button {...args} />
      </Row>
      <Row>
        <Button isInline>Button / inline</Button>
        <Button isInline icon={<Icon />} iconAlign="left">
          Button / with icon, icon align: left
        </Button>
        <Button isDisabled isInline icon={<Icon />}>
          Button / with icon, disabled
        </Button>
        <Link href="https://google.com" isInline>
          Link as button
        </Link>
      </Row>
    </Block>
    <Block>
      <Header>Outlined</Header>
      <Row>
        <Button $type="outlined">Button / outlined</Button>
      </Row>
      <Row>
        <Button $type="outlined" isInline>
          Button / inline
        </Button>
        <Button $type="outlined" isInline icon={<Icon />} iconAlign="left">
          Button / with icon, icon align: left
        </Button>
        <Button $type="outlined" isDisabled isInline icon={<Icon />}>
          Button / with icon, disabled
        </Button>
        <Link $type="outlined" href="https://google.com" isInline>
          Link as button
        </Link>
      </Row>
    </Block>
    <Block>
      <Header>Button as Link</Header>
      <Row>
        <Button $type="link">Button / link</Button>
        <Button $type="link" isInline icon={<Icon />} iconAlign="left">
          Button / with icon, icon align: left
        </Button>
        <Button $type="link" isDisabled isInline icon={<Icon />}>
          Button / with icon, disabled
        </Button>
        <Link $type="link" href="https://google.com" isInline>
          Link as button
        </Link>
      </Row>
    </Block>
  </div>
);
