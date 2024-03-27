import { useState } from 'react';
import styles from './index.module.css';
import {
  UiLibrary,
  Spin,
  CustomUpload,
  DropImage,
  Switch,
} from 'uiLibrary/src';

export function Index() {
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const iconProps = { file, setFile };

  const sidebarItems = [
    {
      title: '場域管理',
      path: '#',
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
          path: '#',
          icon: 'mingcute:profile-line',
        },
        {
          title: '類別管理',
          path: '#',
          icon: 'mingcute:profile-line',
        },
      ],
    },
  ];

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="flex p-12">
          <section>
            {/* <Spin show /> */}
            {/* <div>
            <div>DropImage</div>
            <DropImage setFiles={setFiles} />
          </div> */}

            <Switch />

            <div className="p-8">
              <div>CustomUpload</div>
              <CustomUpload {...iconProps} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Index;
