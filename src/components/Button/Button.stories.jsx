import React from 'react';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: true },
  },
};

const defaultProps = {
  children: 'Button Text',
};

export function Default(args) {
  return <Button {...args} />;
}
Default.args = {
  ...defaultProps,
};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};

export function Disabled(args) {
  return <Button {...args} />;
}
Disabled.args = {
  ...defaultProps,
  disabled: true,
};
Disabled.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).not.toHaveBeenCalled();
};
