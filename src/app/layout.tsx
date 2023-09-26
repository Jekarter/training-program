import './globals.scss'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import cl from 'classnames'
import Header from '@/components/Header/Header'
import Navigation from '@/components/Navigation/Navigation'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import Footer from '@/components/Footer/Footer'



export const metadata: Metadata = {
  title: 'Моя программа тренировок',
  description: 'Конструктор программы тренировок',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header>
          <Navigation />
        </Header>
        {children}
        <Footer />

      </body>
    </html>
  )
}
