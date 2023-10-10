'use client';
import './globals.scss';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import { ReduxProvider } from '@/store/provider';
import Account from '@/components/Account/Account';

export const metadata: Metadata = {
  title: 'Программа Тренировок',
  description: 'Конструктор Программы Тренировок',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['тренировка', 'конструктор', 'программа', 'упражнение'],
  creator: 'Jekarter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header>
          <Navigation />
          <Account />
        </Header>
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
