import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

const Footer = () => {
  return (
    <footer className={classNames(styles.footer, 'container')}>
      <div className={styles.container}>
        <Link href="https://t.me/je_kart" target="_blank">
          <Image src="/telegram.svg" alt="" width={20} height={20} />
        </Link>
        <Link href="mailto:e.kart.dev@gmail.com">
          <Image src="/gmail.svg" alt="" width={20} height={20} />
        </Link>
      </div>
      <div className={styles.copyrigth}>© Jekarter</div>
    </footer>
  );
};

export default Footer;
