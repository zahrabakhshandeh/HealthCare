import Hero from '@/components/landingPageComponents/Hero';
import Navbar from '@/components/landingPageComponents/Navbar';

export default function Home() {
  return (
    <main>
      <div className='grid xl:grid-cols-12 col-span-2 lg:col-span-4'>
        <div className='col-span-full'>
          <Navbar />
        </div>
        <div className='col-span-full'>
          <Hero />
        </div>
      </div>
    </main>
  );
}