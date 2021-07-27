import Link from 'next/link';
import * as RiIcons from 'react-icons/ri';
import Orders from '../Orders/Orders';
import OrderSummary from '../OrderSummary/OrderSummary';
import styles from './CartBody.module.scss';

const CartBody = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headLines}>
          <div className={styles.left}>
            <RiIcons.RiArrowGoBackLine color="#ff6f00" />
            <div className={styles.options}>
              <h4>your shopping cart</h4>
              <p>
                2 item(s) <span>Add more</span>
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <RiIcons.RiShieldStarFill />
            <p>100% Secure</p>
          </div>
        </div>
      </div>

      <div className={styles.cart}>
        <div className={styles.cart__body}>
          <div className={styles.cart__left__side}>
            <Orders />
          </div>
          <div className={styles.cart__right__side}>
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBody;
