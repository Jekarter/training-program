import React from 'react';
import styles from './header.module.scss';
import classNames from 'classnames';

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <header className={classNames(styles.header)}>{children}</header>;
};

export default Header;
