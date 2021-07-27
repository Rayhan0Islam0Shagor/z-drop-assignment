import { useState } from 'react';
import styles from './OrderSummary.module.scss';
import * as IoIcons from 'react-icons/io';
import { Vouchers } from '../../data/data';

const OrderSummary = () => {
  const [visible, setVisible] = useState(false);
  const [voucher, setVoucher] = useState(null);

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
        {visible ? <IoIcons.IoIosArrowUp /> : <IoIcons.IoIosArrowDown />}
      </div>

      {visible && (
        <div>
          {Vouchers.map((voucher) => (
            <div
              key={voucher.id}
              onClick={() => setVoucher(voucher.code)}
              className={styles.voucher}
            >
              <p>{voucher.Offer_desc}</p>
              <span>{voucher.amountOfDiscount}%</span>
            </div>
          ))}
        </div>
      )}

      <form className={styles.coupon__apply__form} onSubmit={submitHandler}>
        <input type="text" placeholder="Voucher Code" defaultValue={voucher} />
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
