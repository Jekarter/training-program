'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navigation.module.scss';
import cl from 'classnames';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.containerButton}>
        <button
          className={styles.buttonMenu}
          onClick={() => handleShowMenu()}
        ></button>
      </div>
      <div
        className={cl(
          showMenu ? styles.containerShow : styles.containerHide,
          styles.container,
        )}
      >
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.listLink} href="/">
              Главная
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.listLink} href="/about">
              О Конструкторе
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.listLink} href="/how-to-use">
              Как пользоваться
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
