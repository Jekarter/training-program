'use client';
import React from 'react';
import styles from './page.module.scss';
import AboutTabs from '@/components/AboutTabs/AboutTabs';

const About = () => {
  return (
    <div className={styles.container}>
      <AboutTabs />
    </div>
  );
};

export default About;
