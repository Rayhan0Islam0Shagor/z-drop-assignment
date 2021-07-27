import { useState } from 'react';
import styles from './OrderSummary.module.scss';
import * as IoIcons from 'react-icons/io';

const OrderSummary = () => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.order__summary}>
      <div className={styles.headline}>
        <p>Order Summary</p>
      </div>

      <div className={styles.price__section}>
        <div className={styles.price}>
          <p>
            Subtotal <span>(20 items)</span>
          </p>
          <p>BDT. 38,850</p>
        </div>
        <div className={styles.price}>
          <p>Discount</p>
          <p>BDT. 0</p>
        </div>
        <div className={styles.price}>
          <p>Shipping Charge</p>
          <p>BDT. 600</p>
        </div>
      </div>

      <div className={styles.options} onClick={handleClick}>
        <p>Gift Card, Coupons & Promotional Codes</p>

        {visible ? <IoIcons.IoIosArrowDown /> : <IoIcons.IoIosArrowUp />}
      </div>

      <form className={styles.coupon__apply__form} onSubmit={submitHandler}>
        <input type="text" placeholder="Voucher Code" />
        <button type="submit">Apply</button>
      </form>

      <div className={styles.total}>
        <p>Total</p>
        <p>BDT. 39,375</p>
      </div>
    </div>
  );
};

export default OrderSummary;
