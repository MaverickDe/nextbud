import Header from '../mainnav';
import Footer from '../Footer';

const RootLayout = ({ children }) => {
  return (
    <>
    
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;