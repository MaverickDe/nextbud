import Header from '../mainnav';
import Footer from '../Footer5';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/images/logo/logo1.svg";

const RootLayout2 = ({ children }) => {
  return (
    <>
    
    <div className="flex  items-center gap-[10px]">
          <Link
            className="flex  items-center gap-[10px] p-5"
            href="/"
          >
            <Image
              alt="image"
              src={logo}
              className="w-[200px] max-md:w-[150px]"
              priority
              loading="eager"
            />
        
          </Link>
        </div>
   {children}
          <div className='w-full max-lg:mt-auto lg:absolute bottom-0 bg-[rgb(244,237,250,0.9)] backdrop-blur-sm  '>
              
      <Footer />
      </div>
    </>
  );
};

export default RootLayout2;