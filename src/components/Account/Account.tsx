import Link from 'next/link';
import React from 'react';
import styles from './account.module.scss';

const Account = () => {
  return (
    <div className={styles.svgAccount}>
      <Link href={'/profile'}>
        <div>
          <svg
            className={styles.svgProfile}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <g id="_09_user-02" data-name="09 user-02">
              <path d="M16,17a7,7,0,1,1,7-7A7,7,0,0,1,16,17ZM16,5a5,5,0,1,0,5,5A5,5,0,0,0,16,5Z" />
              <path d="M27,29H5V28a9,9,0,0,1,9-9h4a9,9,0,0,1,9,9ZM7.07,27H24.93A7,7,0,0,0,18,21H14A7,7,0,0,0,7.07,27Z" />
            </g>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Account;
