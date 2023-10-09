import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, className, type, onClick }: ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={className} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
