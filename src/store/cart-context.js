import React,{useReducer } from 'react'

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

const initalState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type=="ADD_ITEM"){
        const updatedItems=state.items.concat(action.item)
        const newTotalAmount=state.totalAmount+action.item.price*action.item.amount
        return(
            {
                items:updatedItems,
                totalAmount:newTotalAmount
            }
        )
    }
    return initalState
}

export const CartProvider=(props)=>{
    const [cartState,dispatchCartAction]=useReducer(cartReducer,initalState)
    const addItemHandler=(item)=>{
        dispatchCartAction({
            type:'ADD_ITEM',
            value:item
        })
    }
    const removeItemHandler=(item)=>{}
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;