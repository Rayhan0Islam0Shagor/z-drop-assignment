import { useState } from 'react';
import styles from './OrderSummary.module.scss';
import * as IoIcons from 'react-icons/io';

import { Vouchers, Order as OrderList } from '../../data/data';

const OrderSummary = () => {
  const [visible, setVisible] = useState(false);
  const [voucher, setVoucher] = useState(null);
  const [shippingCharge] = useState(600);
  const [discount, setDiscount] = useState(0.0);

  let subTotal = 0;
  OrderList.forEach((order) => {
    order.products.forEach((product) => {
      subTotal += product.price * product.quantity;
    });
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const discountPrice = Math.floor(
      subTotal * (voucher.amountOfDiscount / 100)
    ).toFixed(2);
    setDiscount(Number(discountPrice));

    setVoucher(null);
  };

  const total = subTotal - discount + shippingCharge;

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
          <p>BDT. {subTotal}</p>
        </div>
        <div className={styles.price}>
          <p>Discount</p>
          <p>BDT. {discount}</p>
        </div>
        <div className={styles.price}>
          <p>Shipping Charge</p>
          <p>BDT. {shippingCharge}</p>
        </div>
      </div>

      <div className={styles.options} onClick={() => setVisible(!visible)}>
        <p>Gift Card, Coupons & Promotional Codes</p>
        {visible ? <IoIcons.IoIosArrowUp /> : <IoIcons.IoIosArrowDown />}
      </div>

      {visible && (
        <div className={styles.list__of__boucher}>
          {Vouchers.map((voucher) => (
            <div
              key={voucher.id}
              onClick={() => {
                setVoucher(voucher);
                setVisible(!visible);
              }}
              className={styles.voucher}
            >
              <p>{voucher.Offer_desc}</p>
              <span>{voucher.amountOfDiscount}%</span>
            </div>
          ))}
        </div>
      )}

      <form className={styles.coupon__apply__form} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Voucher Code"
          defaultValue={voucher?.code}
        />
        <button type="submit" style={{ color: voucher ? 'black' : '' }}>
          Apply
        </button>
      </form>

      {voucher && (
        <small className={styles.coupon}>you use {voucher?.code} coupon</small>
      )}

      <div className={styles.total}>
        <p>Total</p>
        <p>BDT. {total}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
