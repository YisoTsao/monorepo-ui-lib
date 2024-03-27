import type { Meta, StoryFn } from '@storybook/react';
import { Sidebar } from './index';

interface SubNavItem {
  title?: string;
  path?: string;
  icon?: string;
  iconClosed?: string;
  iconOpened?: string;
}

interface SidebarItem {
  title?: string;
  path?: string;
  icon?: string;
  iconClosed?: string;
  iconOpened?: string;
  subNav?: SubNavItem[];
}

interface SidebarProps {
  className: string;
  items?: SidebarItem[];
}

export default {
  component: Sidebar,
  title: 'Sidebar',
} as Meta;

const sidebarItems: SidebarItem[] = [
  {
    title: '場域管理',
    path: '/admin/regions',
    icon: '',
  },
  {
    title: '預約項目管理',
    path: '',
    icon: '',
    iconClosed: 'ri:arrow-down-s-line',
    iconOpened: 'ri:arrow-right-s-line',
    subNav: [
      {
        title: '項目管理',
        path: '/admin/bookItem',
        icon: 'mingcute:profile-line',
      },
      {
        title: '類別管理',
        path: '/admin/bookItem/category',
        icon: 'mingcute:profile-line',
      },
    ],
  },
];

const Template: StoryFn<SidebarProps> = (args) => {
  return <Sidebar {...args} />;
};

export const Base = Template.bind({});
Base.args = {
  className: 'w-64 border border-solid border-gray-300',
  items: sidebarItems,
};
