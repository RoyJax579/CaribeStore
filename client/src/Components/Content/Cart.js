import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import "../../CSS/Cart.css"
import uuid from "uuid/dist/v1"
import { context } from '../../Context/contextProvider'
import Inventory from '../../Functions/Inventory'
import { Categories } from '../../Functions/Categories'
import { Link } from 'react-router-dom'

function Cart() {
    const {state, dispatch} = useContext(context)
    const {cart} = state
    const sum = cart.reduce((total, x) => total+parseFloat(x.totalPrice), 0)

    const [selectedQty, setSelectedQty] = useState({
        id: null,
        qty:0
    })

    let cartQty = cart.reduce((sum, y)=>parseInt(y.quantity)+sum, 0)

    const updateCart = (id, quantity, title, price, image) => {
        dispatch({
            type: "UPDATE_CART", 
            itemInfo: {
                id,
                title,
                quantity,
                price,
                image
            }
        })
    }

    const deleteFromCart = (id) =>{
        dispatch({
            type: "DELETE_FROM_CART", 
            itemID: id
        })
    }

    const cartItem = cart.map(x =>{
                        
        //gets the qty from the inventory for the specific value
        const globalQty = Inventory.find(y => y.id === x.id)
        const defQty = (x.id === selectedQty.id)?selectedQty.qty:0
        const finalQty = (selectedQty.qty === 0)?x.quantity:selectedQty.qty

        return (
            <div className="cart__item" key={uuid()}>
                <img src={x.image} alt=""/>
                <div className="inner__cart">
                    <h1>{x.title}</h1>
                    <p id="price__resp">${x.price}</p>
                    <div className="update">
                        <label htmlFor="Qty">
                        Qty:
                        <select id="Qty" defaultValue={(defQty === 0) ? parseInt(x.quantity) : defQty} 
                        onChange={e => {
                            e.preventDefault()
                            setSelectedQty({id: x.id, qty: parseInt(e.target.value)})
                        }}>
                            {
                                Array(globalQty.quantity).fill().map((_,i)=> {
                                    return (i > 0)&&(<option key={uuid()} value={i}>{i}</option>)
                                })
                            }
                        </select>
                        </label>
                        <button className="update__btn" type="submit"
                         onClick={()=>updateCart(x.id, parseInt(finalQty), x.title, x.price, x.image)}>
                            <i className="fas fa-exchange-alt"></i>Update
                        </button>
                    </div>
                    <button className="delete__btn" type="submit" onClick={()=>deleteFromCart(x.id)}>
                        <i className="fas fa-trash-alt"></i>Delete
                    </button>
                </div>
                <p id="price__main">${x.price}</p>
            </div>
        )
    })

    return (
        <>
        <Helmet>
          <title>{`Cart | CaribeStore`}</title>
        </Helmet>
        <div className="cart__container">
        <h1 className="cart_header">My Cart</h1>
        <div className="cart">
            
            <div className="cart__items">
                {
                    (cart.length === 0)?(
                        <>
                        <p className="Empty">Your cart is currently empty, look around, you might find something you like!</p>

                        <ul>
                        {
                            Categories.map(x =>(
                                <li key={uuid()}>
                                    <Link to={`/${x.category}`} >
                                        {x.category}
                                    </Link>
                                </li>))
                        }        
                        </ul> 
                        </>):cartItem
                }

            </div>
            <hr className="top__hr"/>
            <div className="side__bar">
                <h1>SubTotal ({cartQty} Items): <span>${sum.toFixed(2)}</span></h1>
                <button>Proceed to Checkout</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Cart
