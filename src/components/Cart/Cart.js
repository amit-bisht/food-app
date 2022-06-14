import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const cart_items=[{id:'1',name:'sushi',amount:2,price:12.99}]
const Cart=(props)=>{
    return(
        <Modal>
            <ul className={classes['cart-items']}>{cart_items.map(item=><li key={item.id}>{item.name}</li>)}</ul>
            <div className={classes.total}>
                <span>total amount</span>
                <span>25$</span>
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onHideCart} className={classes['button--alt']}>close</button>
                <button className={classes.button} onClick={props.onHideCart}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart