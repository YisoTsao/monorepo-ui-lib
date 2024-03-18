import type { Meta, StoryFn } from '@storybook/react';
import { DropImage } from './index';

interface DropImageProps {
  preview: boolean;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export default {
  component: DropImage,
  title: 'DropImage',
} as Meta;

const Template: StoryFn<DropImageProps> = (args) => {
  return <DropImage {...args} />;
};

export const Base = Template.bind({});
