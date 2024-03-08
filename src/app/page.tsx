import HeaderSection from '@/components/landingPageComponents/Header_HowWeHelp';
import Hero from '@/components/landingPageComponents/Hero';
import Navbar from '@/components/landingPageComponents/Navbar';
import Search from '@/components/landingPageComponents/Search';
import ServiceSection from '@/components/landingPageComponents/SerciveSection';
import TextSection from '@/components/landingPageComponents/TextSection/indx';

export default function Home() {
  return (
    <main>
      <div className='grid xl:grid-cols-12 col-span-2 lg:col-span-4'>
        <div className='col-span-full sticky top-0 z-40'>
          <Navbar />
        </div>
        <div className='col-span-full'>
          <Hero />
        </div>
        {/* <div className='col-span-full '>
          <Search />
        </div> */}
        <div className='col-span-full'>
          <ServiceSection />
        </div>
        {/* <div className='col-span-full'>
          <HeaderSection/>
        </div> */}
        <div className='col-span-full'>
          <TextSection/> 
        </div>
      </div>
    </main>
  );
}