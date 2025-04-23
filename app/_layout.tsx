import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Slot } from 'expo-router';


export default function Layout() {
  return (
    <>
      <Navbar />
      <Slot />
      <Footer />
    </>
  );
}
