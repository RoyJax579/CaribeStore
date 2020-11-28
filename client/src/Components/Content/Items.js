import React from 'react'
import { Link } from 'react-router-dom'
import "../../CSS/Items.css"
import { ProductCategories } from '../../Functions/ProductCategories'

const Items = (props) => {
    const {category, item} = props.match.params
  
    const parameters = {
        category,
        item
    }

    return (
        <>
        <div className="items_body">

            <div className="separator"><p className="linkText"><Link to={`/${category}`}>{category}</Link><span>/</span>{item}</p></div>
            
            <label htmlFor="sort" id="sort_label">
                <b>Sort By: </b>
                <select id="sort_select">
                    <option value="PLTH">Price: Low to High</option>
                    <option value="PHTL">Price: High to Low</option>
                    <option value="NATZ">Name: A to Z</option>
                    <option value="NZTA">Name: Z to A</option>
                </select>
            </label>

            <div className="items">
            {ProductCategories(parameters)}
            </div>
        </div>
        </>
    )
}


export default Items


