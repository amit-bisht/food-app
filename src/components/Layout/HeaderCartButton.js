import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const ctx=useContext(CartContext)
  const totalNo=ctx.items.reduce((currentValue,item)=>{
    return currentValue+item.amount
  },0);
  return (
    <button className={classes.button} onClick={props.onShowCart}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>{totalNo}</span>
    </button>
  );
};

export default HeaderCartButton;
