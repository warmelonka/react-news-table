import { ComponentPropsWithoutRef, MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function Button(props: Props) {
  const { children, className, ...rest } = props;

  const buttonClass = `${styles.button} ${className || ''}`;

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}

export default Button;
