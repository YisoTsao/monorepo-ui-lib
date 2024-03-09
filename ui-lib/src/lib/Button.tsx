import styles from './ui-lib.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button type="button" className={styles['submitType']}>
      Button
    </button>
  );
}

export default Button;
