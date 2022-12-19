import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import AddToCart from '../AddToCart';
import ReduxAddToCart from '../ReduxAddToCart';

import styles from './ReduxCart.module.css';

// {
//   '1': { id: '1', quantity: '', price: '' },
//   '2': { id: '2' }
// }
// [{ id: '1' }, { id: '2' }]

function Cart() {
  const cart = useSelector(state => state.cart.items);
  const cartList = Object.values(cart);

  function getTotalPrice() {
    let totalPrice = 0;
    cartList.forEach(cartItem => {
      totalPrice += (cartItem.quantity * cartItem.price)
    })
    return totalPrice;
  }

  // const totalPrice = getTotalPrice();
  // useMemo(fn, deps)
  const totalPrice = useMemo(getTotalPrice, [cart]);

  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   setTotalPrice(getTotalPrice());
  // }, [cart]);

  if (cartList.length === 0) {
    return (
      <div className={styles.cart}>No items in the cart!</div>
    );
  } else {
    return (
      <div className={styles.cart}>
        <ol> 
          {cartList.map(cartItem => (
            <li className={styles.cartItem} key={cartItem.id}>
              <div>{cartItem.title}</div>
              <div className={styles.cartItemRow}>
                <ReduxAddToCart product={cartItem} /> x Rs.{cartItem.price} = Rs.{cartItem.quantity * cartItem.price}
              </div>
            </li>
          ))}
        </ol>
        <div>Cart total: Rs.{totalPrice}</div>
      </div>
    )
  }
}

export default Cart;
