import { useState } from 'react';
import styles from './index.module.css';
import {
  UiLibrary,
  Spin,
  CustomUpload,
  UploadImage,
} from '../../../uiLibrary/src';
// import { CustomUpload } from '../../../uiLibrary/src/lib/UploadImage/CustomUpload';

export function Index() {
  const [file, setFile] = useState<File | null>(null);

  const iconProps = { file, setFile };

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container bg-gray-100">
          {/* <Spin show /> */}
          <UploadImage {...iconProps} />
          <CustomUpload {...iconProps} />

          <UiLibrary />
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome ui-lib 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
