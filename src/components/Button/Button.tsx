import React from 'react';
import styles from './button.module.scss';
import cl from 'classnames';

interface ButtonProps {
  text?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  className,
  type,
  children,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button
        className={cl(styles.button, className)}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
        <span>{text}</span>
      </button>
    </>
  );
};

export default Button;
