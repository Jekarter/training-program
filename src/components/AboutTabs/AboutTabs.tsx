'use client';
import React, { useState } from 'react';
import styles from './abouttabs.module.scss';
import cl from 'classnames';

const tabInfo = [
  {
    id: 1,
    title: 'Вкладка 1',
    text: 'Данный сайт был создан с целью: Предоставить пользователям возможность создавать индивидуальные программы тренировок путем выбора и комбинирования различных упражнений и упражнений на основе их целей и предпочтений. Он решает следующую проблему: Многие люди ищут эффективные тренировки, но сталкиваются с трудностями в составлении сбалансированной программы или не знают, какие упражнения выбрать для достижения своих целей. Этот сайт предоставляет инструмент, который упрощает и автоматизирует процесс создания индивидуальных программ тренировок, помогая пользователям составить оптимальные тренировочные планы в соответствии с их потребностями и предпочтениями.',
  },
  {
    id: 2,
    title: 'Вкладка 2',
    text: 'Регулярное изменение тренировок является важной составляющей эффективного тренировочного процесса. Когда организм приспосабливается к постоянным тренировкам, прогресс может замедлиться или вообще остановиться. Регулярная смена тренировок помогает преодолеть плато и стимулирует дальнейший прогресс. Кроме того, разнообразные тренировки позволяют активировать различные мышцы и системы организма, способствуя более полному и всестороннему развитию.',
  },
  {
    id: 3,
    title: 'Вкладка 3',
    text: 'Важно выбирать тренировки и место для тренировок исходя из своих целей, предпочтений и доступных ресурсов. Комбинирование тренировок на улице и в тренажерном зале может помочь достичь разностороннего физического развития и поддержания мотивации. Наш сайт помогает быстро подготовить программу для тренировки на день/неделю/месяц',
  },
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const showTabInfo = (id: number) => {
    const findIndex = tabInfo.find((tab) => tab.id === id);
    /*  const findIndex = tabInfo[id - 1]; */

    return (
      <div className={cl(styles.tabContent, styles.tabContent + id)}>
        <p> {findIndex ? findIndex.text : 'Здесь пока нет информации'}</p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        {tabInfo.map((tab) => (
          <div key={tab.id}>
            <label className={styles.tabHead}>
              <input
                className={styles.tabRadio}
                name="tab-btn"
                type="radio"
                onClick={() => setActiveTab(tab.id)}
              />
              {tab.title}
            </label>
          </div>
        ))}
        {showTabInfo(activeTab)}
      </div>
    </div>
  );
};

export default AboutTabs;
