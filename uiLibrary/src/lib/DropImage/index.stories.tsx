import type { Meta, StoryFn } from '@storybook/react';
import { DropImage } from './index';

interface ImageItem {
  map?: any;
  length?: ImageItem | undefined;
  url: string;
  book_items_category_id: string | null;
}

interface DropImageProps {
  preview: boolean;
  imageUrls?: ImageItem[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export default {
  component: DropImage,
  title: 'DropImage',
} as Meta;

const demoImage: ImageItem[] = [
  {
    url: 'https://gobobook.s3.ap-northeast-1.amazonaws.com/regions/DEV/region1.png',
    book_items_category_id: null,
  },
  {
    url: 'https://gobobook.s3.ap-northeast-1.amazonaws.com/regions/DEV/region2.png',
    book_items_category_id: null,
  },
];

const Template: StoryFn<DropImageProps> = (args) => {
  return <DropImage {...args} />;
};

export const Base = Template.bind({});
Base.args = {
  preview: true,
  setFiles: () => ({}),
  imageUrls: demoImage,
};
