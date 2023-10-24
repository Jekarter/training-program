import React from 'react';
import styles from './page.module.scss';
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';

const Faq = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Часто Задаваемые Вопросы</h1>
      <FaqAccordion />
    </div>
  );
};

export default Faq;
