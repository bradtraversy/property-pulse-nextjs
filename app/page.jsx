import Link from 'next/link';
import Hero from '../components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <Footer />
    </>
  );
};
export default HomePage;
