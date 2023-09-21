import Image from 'next/image'
import styles from './page.module.scss'
import mainImage from '../../public/main-image.jpg'
import cl from 'classnames'

export default function Home() {
  return (
    <main>
        <h1 className='visually-hidden'>Конструктор программы тренировок</h1>
        <div className={styles.container}>
          <Image className={cl(styles.mainImage, styles.background)} src={mainImage} alt=''/>
          <h2 className={cl(styles.title, styles.background)}>Создай тело своей мечты <span className={styles.titleName}>с Trainify</span></h2>
          <p className={styles.description}>Наш сервис поможет вам создать персонализированную тренировочную программу, соответствующую вашим целям и потребностям.</p>
          <button>Попробовать</button>
        </div>



    </main>
  )
}
