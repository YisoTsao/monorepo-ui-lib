import styles from './uiLibrary.module.css';

/* eslint-disable-next-line */
export interface UiLibraryProps {}

export function UiLibrary(props: UiLibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiLibrary!</h1>
    </div>
  );
}

export default UiLibrary;
