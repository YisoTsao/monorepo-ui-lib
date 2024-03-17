import { useState } from 'react';
import styles from './index.module.css';
import {
  UiLibrary,
  Spin,
  CustomUpload,
  DropImage,
} from '../../../uiLibrary/src';

export function Index() {
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const iconProps = { file, setFile };

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container p-12">
          {/* <Spin show /> */}
          {/* <div>
            <div>DropImage</div>
            <DropImage setFiles={setFiles} />
          </div> */}

          <input type="file" accept=".png, .jpg, .jpeg" />

          <div>
            <div>CustomUpload</div>
            <CustomUpload {...iconProps} />
          </div>

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
