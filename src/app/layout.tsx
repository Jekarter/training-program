import './globals.scss';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import { ReduxProvider } from '@/store/provider';
import Account from '@/components/Account/Account';
import MyProgram from '@/components/MyProgram/MyProgram';

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
    <ReduxProvider>
      <html lang="ru">
        <body>
          <Header>
            <Navigation />
            <MyProgram />
            <Account />
          </Header>
          {children}
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
