import type { Meta, StoryFn } from '@storybook/react';
import { Switch } from '../../components/ui/switch';

interface SwitchProps {
  id?: string;
  onCheckedChange?: () => void;
  disabled: boolean;
}

export default {
  component: Switch,
  title: 'Switch',
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => {
  return <Switch {...args} />;
};

export const Base = Template.bind({});
Base.args = {
  id: 'ad-123',
  onCheckedChange: () => ({}),
  disabled: false,
};
