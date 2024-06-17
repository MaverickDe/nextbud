import Header from '../mainnav2';
import Footer from '../Footer3';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/images/logo/logo1.svg";

const RootLayout3 = ({ children }) => {
  return (
    <>
        <Header />

   {children}
          <div className='w-full max-lg:mt-auto  bottom-0 bg-[rgb(244,237,250,0.9)] backdrop-blur-sm  '>
              
      <Footer />
      </div>
    </>
  );
};

export default RootLayout3;