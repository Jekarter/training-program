import MainInfo from '@/components/MainInfo/MainInfo';
import Catalog from '@/components/Catalog/Catalog';
import { Roboto } from 'next/font/google';
import cl from 'classnames';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className={cl(roboto.className, 'containerMain')}>
      <MainInfo />
      <Catalog />
    </main>
  );
}
