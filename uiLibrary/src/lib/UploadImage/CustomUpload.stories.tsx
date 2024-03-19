import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { CustomUpload } from './CustomUpload';

interface CustomUploadProps {
  file?: File | null;
  setFile?: any;
  imageUrl?: string;
}

export default {
  component: CustomUpload,
  title: 'CustomUpload',
} as Meta;

const Template: StoryFn<CustomUploadProps> = (args) => {
  const [file, setFile] = useState(null);
  return <CustomUpload {...args} file={file} setFile={setFile} />;
};

const CustomerTemplate: StoryFn<CustomUploadProps> = (args) => {
  const [file, setFile] = useState(null);
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
Base.args = {
  file: null,
  setFile: () => {
    return;
  },
  imageUrl: '',
};

export const Customer = CustomerTemplate.bind({});
Customer.args = {
  file: null,
  setFile: () => {
    return;
  },
  imageUrl: '',
};
