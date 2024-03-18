import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { CustomUpload } from './CustomUpload';

interface CustomUploadProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export default {
  component: CustomUpload,
  title: 'CustomUpload',
} as Meta;

const Template: StoryFn<CustomUploadProps> = (args) => {
  return <CustomUpload {...args} />;
};

const CustomerTemplate: StoryFn<CustomUploadProps> = (args) => {
  const [file, setFile] = useState<File | null>(null);
  return (
    <CustomUpload {...args} file={file} setFile={setFile}>
      <div className="border border-solid border-gray-400 p-4">
        <div>圖片僅支援 png、jpg、jpeg</div>
        <div>點擊上傳</div>
      </div>
    </CustomUpload>
  );
};

export const Base = Template.bind({});
export const Customer = CustomerTemplate.bind({});
