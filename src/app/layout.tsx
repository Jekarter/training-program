import './globals.scss';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Моя программа тренировок',
  description: 'Конструктор программы тренировок',
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
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
