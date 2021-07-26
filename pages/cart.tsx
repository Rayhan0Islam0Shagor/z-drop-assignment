import Head from 'next/head';
import CartBody from '../components/CartBody/CartBody';
import Navbar from '../components/Navbar/Navbar';
import SubNav from '../components/SubNav/SubNav';

const Cart = () => {
  return (
    <>
      <Head>
        <title>cart</title>
      </Head>

      <body>
        <Navbar />
        <SubNav />
        <CartBody />
      </body>
    </>
  );
};

export default Cart;
