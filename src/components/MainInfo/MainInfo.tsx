import Image from 'next/image';
import styles from './maininfo.module.scss';
import mainImage from '../../assets/main-image.jpg';
import cl from 'classnames';

const MainInfo = () => {
  return (
    <div className={styles.mainInfo}>
      <h1 className="visually-hidden">Конструктор программы тренировок</h1>
      <div className={styles.container}>
        <Image
          className={cl(styles.mainImage, styles.background)}
          src={mainImage}
          alt=""
          sizes="100vw"
        />
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
