import React, {useContext, useEffect, useState } from 'react'
import "../CSS/Items.css"
import uuid from "uuid/dist/v1"
import { context } from '../Context/contextProvider'
import { db } from '../Config/fbConfig'


export const ProductCategories = (parameters) => {
    const {dispatch} = useContext(context)
    

    const addToCart = (id, title, quantity, price, image, totalPrice) =>{
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id,
                title,
                quantity,
                price,
                image, 
                totalPrice
            }
        })
    }

    const {
        category,
        item
    } =  parameters
  
    

    const [items, setItems] = useState([])

    useEffect(()=>{
        const getItems =  (async () => {
            const arrOfItems = await db
                .collection("Inventory")
                .get()
                .then(snapshot => {
                    return snapshot
                        .docs
                        .filter(x => (x.data()["Sub_Category"] === item && x.data()["Category"] === category)&&x.data())
                        .map(y => y.data())
                })
            
            setItems(arrOfItems)
        })()
    }, [])

    const [selectedQty, setSelectedQty] = useState({
        id: null,
        qty:0
    })
    
    const finalQty = parseInt(selectedQty.qty===0?1:selectedQty.qty)

    return items
        .map(({ID, Item_Name, Price, ImageSrc, Quantity}) => {

            //sets the default value for the item with that specific id
            const defVal = parseInt((selectedQty.id === ID)?selectedQty.qty:0)
            return (
                <React.Fragment key={uuid()}>
                    <div className="card">
                        <img src={ImageSrc} alt={item} />
                        <p>{Item_Name}</p>
                        
                        <div className="innerBox">
                            <div className="dropdown">
                                <label htmlFor="quantity">Qty:</label>
                                <select id="quantity" defaultValue={defVal===0?1:defVal} onChange={e => {
                                    e.preventDefault()
                                    setSelectedQty({ID, qty: parseInt(e.target.value)})
                                }}>
                                {
                                    Array(Quantity).fill().map((_, i)=> {
                                        if(i===0){
                                            return <option key={uuid()} value={0}>-</option>
                                        }else{
                                            return <option key={uuid()} value={i} >{i}</option>
                                        }
                                    })
                                }
                                </select>
                            </div>
                            <b>$ {Price}</b>
                        </div>
                        <button type="submit" onClick={()=> {
                            addToCart(ID, item, parseInt(finalQty), Price, ImageSrc, parseInt(finalQty)*parseFloat(Price))
                            setSelectedQty({id:null, qty: 0})
                        }}>Add to Cart</button>
                    </div>
                </React.Fragment>
            )
        })

    //return items

    
    


            
    

    
    // return inventoryItems
      
}

//onClick={()=>addToCart(item, quantity, price, image())}