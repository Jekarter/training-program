import Image from 'next/image'
import styles from './page.module.scss'
import mainImage from '../assets/main-image.jpg'
import cl from 'classnames'
import MainInfo from '@/components/MainInfo/MainInfo'
import FormFilter from '@/components/FormFilter/FormFilter'

export default function Home() {
  return (
    <main>
      <MainInfo/>
      <FormFilter/>
    </main>
  )
}
