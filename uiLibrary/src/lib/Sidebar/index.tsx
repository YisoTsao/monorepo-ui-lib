import React, { useState } from 'react';
import SubMenu from './SubMenu';

interface SubNavItem {
  title?: string;
  path?: string | undefined;
  icon?: string;
  iconClosed?: string;
  iconOpened?: string;
}

interface SidebarItem {
  title?: string;
  path?: string | undefined;
  icon?: string;
  iconClosed?: string;
  iconOpened?: string;
  subNav?: SubNavItem[];
}

interface SidebarProps {
  className?: string;
  items?: SidebarItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ className, items }) => {
  const [isClient] = useState(true);

  return (
    isClient && (
      <aside
        className={[
          'w-64 h-screen justify-center hidden lg:flex',
          className,
        ].join(' ')}
      >
        <div className="w-full">
          {items?.map((item) => (
            <SubMenu item={item} key={item?.path} />
          ))}
        </div>
      </aside>
    )
  );
};

export default Sidebar;
