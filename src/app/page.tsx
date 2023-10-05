import MainInfo from '@/components/MainInfo/MainInfo';
import Catalog from '@/components/Catalog/Catalog';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <MainInfo />
      <Catalog />
    </main>
  );
}
