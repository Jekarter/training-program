import React from 'react';
import styles from './header.module.scss';
import cl from 'classnames';

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <header className={cl(styles.header)}>{children}</header>;
};

export default Header;
