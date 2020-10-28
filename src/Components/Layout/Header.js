import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../../Context/contextProvider';
import "../../CSS/Header.css"
import AccountsBar from './AccountsBar';

const openNav = () => {
    const nav = document.getElementById("nav");
    const blur = document.getElementById("blur");

    
    // nav.style.display="block";
    nav.style.visibility = "visible";
    nav.style.left = "0";    
    document.body.style.overflow = "hidden";
    blur.style.display = "block";
}

const openAccount = ()=>{
    const accountBar = document.getElementById("accountBar");
    const blur = document.getElementById("blur");

    accountBar.style.visibility = "visible";
    accountBar.style.right = "0";    
    document.body.style.overflow = "hidden";
    blur.style.display = "block";
}

const Header = () => {

   const {state} = useContext(context)
   const {cart} = state

   //gets the qty of cart items and sums them
   let cartQty = cart.reduce((sum, y)=>parseInt(y.quantity)+sum, 0)


   return( 
   <>
    <header id="head">
        <div className="Upper__Head">
            <div className="Logo">
                <Link to="/"><span>C</span>aribe<span>S</span>tore</Link> 
            </div>
        </div>
        <div className="Lower__Head">
            <div id="bars">
                <i className="fa fa-bars" aria-hidden="true" onClick={openNav}></i>
            </div>
            <div className="Logo hide2">
                <Link to="/"><span>C</span>aribe<span>S</span>tore</Link> 
            </div>
            <form>
                <div id="in_butt">
                    <input type="search" placeholder="Search..." name="search" required />
                    <button type="submit" name="search_submit" id="search_btn">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </form>

            {/* Code to change when the user can log in n sign up */}
            {/* <ul>
                <li>
                    <div className="Acc" id="Acc" onmouseover="DisplayAcc()">
                        <b></b>
                    </div>
                </li>
                <li><Link to="Cart.php">Cart</Link></li>
                    <p className="quantity"></p> 
            </ul> */}
        
            <ul>
                <li className="hide2"><button id="account" className="link" onClick={openAccount} >Account</button></li>
                <li >
                    <Link to="/Cart" className="basket__a link" >
                        <i className="fa fa-shopping-basket basket" title="Basket"></i>
                        <p className="basket__num" title="Basket Amount">{cartQty}</p>
                    </Link>
                </li>
            </ul>
            <AccountsBar/>
        </div>
        
    </header>
    </>)
}




export default Header