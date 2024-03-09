import type { Meta, StoryObj } from '@storybook/react';
import { UiLib } from './ui-lib';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiLib> = {
  component: UiLib,
  title: 'UiLib',
};
export default meta;
type Story = StoryObj<typeof UiLib>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiLib!/gi)).toBeTruthy();
  },
};
