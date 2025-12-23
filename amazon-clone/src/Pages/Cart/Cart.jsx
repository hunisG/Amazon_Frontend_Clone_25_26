import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import {Type} from '../../Utility/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((value, item) => {
    return item.price * item.value + value;
  }, 0);

const increment =(item)=>{
  dispatch({
type:Type.ADD_TO_BASKET,item
  })
}

const decrement =(id)=>{
  dispatch({
    type:Type.REMOVE_FROM_BASKET,id
  })
}

  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cart__container}>
          <h2>Hello</h2>
          <h1>Your Shopping Basket</h1>
          <hr />
          {basket?.length == 0 ? (
            <div className={styles.emptyCart}>
              <img
                src="../../../public/images/fun-3d-cartoon-teenage-boy-shopping.jpg"
                alt="Empty cart"
                className={styles.emptyCartImage}
              />
              <h3>Oops! Your cart is empty</h3>
              <p>Add items to your cart to see them here.</p>

              <Link to="/" className={styles.shopBtn}>
                Start Shopping
              </Link>
            </div>
          ) : (
            basket?.map((item, id) => {
              return (
                <section className={styles.cart_product}>
                  <ProductCard
                    key={id}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                    disableLink
                  />
                  <div className={styles.btn_container}>
                    <button
                      className={styles.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={30} />
                    </button>
                    <span>{item.value}</span>
                    <button
                      className={styles.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p> Subtotal ({basket?.length} items)</p>
              <CurrencyFormat value={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
