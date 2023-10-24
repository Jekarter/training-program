import styles from './maininfo.module.scss';
import cl from 'classnames';
import MainSwiper from '../MainSwiper/MainSwiper';

const MainInfo = () => {
  return (
    <div className={styles.mainInfo}>
      <h1 className="visually-hidden">Конструктор программы тренировок</h1>
      <div className={styles.container}>
        <MainSwiper />
        <div className={styles.containerText}>
          <h2 className={cl(styles.title, styles.background)}>
            Создай тело своей мечты с Trainify
          </h2>
          <p className={styles.description}>
            Наш сервис поможет вам создать персонализированную тренировочную
            программу, соответствующую вашим целям и потребностям.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
