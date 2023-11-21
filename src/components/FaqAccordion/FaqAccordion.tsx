'use client';
import React, { useState } from 'react';
import styles from './faqaccordion.module.scss';

interface FaqSection {
  id: number;
  question: string;
  answer: string;
}

const faq: FaqSection[] = [
  {
    id: 1,
    question: 'Как пользоваться конструктором тренировок?',
    answer:
      'Чтобы использовать конструктор тренировок, откройте сайт и выберите желаемые упражнения из предложенного списка. Затем добавьте выбранные упражнения в свою программу тренировок, аналогично добавлению товаров в корзину. После того, как программа тренировок готова, перейдите в раздел `Программа` и выберите опцию для скачивания программы в формате PDF.',
  },
  {
    id: 2,
    question: 'Как добавить упражнение в программу тренировок?',
    answer:
      'Чтобы добавить упражнение в программу тренировок, найдите его в списке доступных упражнений и нажмите на кнопку `Добавить в мою программу`. Упражнение будет автоматически добавлено в вашу программу тренировок.',
  },
  {
    id: 3,
    question: 'Как удалить упражнение из программы тренировок?',
    answer:
      'Чтобы удалить упражнение из программы тренировок, обычно на сайте конструктора тренировок есть кнопка `Удалить` или аналогичный элемент управления рядом с каждым упражнением в программе. Нажмите на эту кнопку, чтобы удалить выбранное упражнение из программы тренировок.',
  },
  {
    id: 4,
    question:
      'Как связаться с поддержкой сайта, если возникли проблемы с конструктором тренировок?',
    answer: 'Ответ: Напишите мне в телеграмм: @je_kart',
  },
];

interface AccordionSectionProps {
  section: FaqSection;
  isActiveSection: boolean;
  sectionIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AccordionSection = ({
  section,
  isActiveSection,
  sectionIndex,
  setActiveIndex,
}: AccordionSectionProps) => {
  const toggleSection = () => {
    const nextSection = isActiveSection ? 0 : sectionIndex;
    setActiveIndex(nextSection);
  };

  return (
    <div>
      <button
        className={styles.accordionHeader}
        onClick={() => toggleSection()}
      >
        {section.question}
      </button>
      {isActiveSection && (
        <div className={styles.accordionBody}>{section.answer}</div>
      )}
    </div>
  );
};

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.container}>
      <ul className={styles.accordion}>
        {faq.map((section) => (
          <li key={section.id}>
            <AccordionSection
              section={section}
              isActiveSection={section.id === activeIndex}
              setActiveIndex={setActiveIndex}
              sectionIndex={section.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqAccordion;

/* ////////////////////////// */
