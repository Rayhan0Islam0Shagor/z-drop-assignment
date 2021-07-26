import Head from 'next/head';
import CartBody from '../components/CartBody/CartBody';
import Navbar from '../components/Navbar/Navbar';
import SubNav from '../components/SubNav/SubNav';

import { NavbarLinks } from '../data/data';
import { NavLinks } from '../types/types';

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
