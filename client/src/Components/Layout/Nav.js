import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import "../../CSS/Nav.css"
import { Categories } from '../../Functions/Categories';
import uuid from "uuid/dist/v1"
import { context } from '../../Context/contextProvider';
import { auth } from '../../Config/fbConfig';

const Close = ()=>{
    let nav = document.getElementById("nav");
    let blur = document.getElementById("blur");

    blur.style.display = "none"
    nav.style.left = "-70%";
    document.body.style.overflow = "auto";

}

const removeBlur = () => {
    const blur = document.getElementById("blur");
    blur.style.display = "none";
    document.body.style.overflow = "auto";
}

const Nav = () => {
    const {state} = useContext(context)
    const {user} = state

    const handleAuth = () =>{
        if (user){
            auth.signOut()
            alert("You have successfully logged out!")
            removeBlur()
            // history("/")
        }
    }

    return (
        <>
        <nav id="nav">
            <div className="close hide">
                <i id="close" className="fas fa-times closeButt" onClick={Close}></i>
            </div>

            <ul className="main__ul">
            <li className="hide">
                <Link to="" className="nav__a">
                    Account<i className="fa fa-sort-desc" aria-hidden="true"></i>
                </Link>
                <div className="sub-menu1 nav__li1">
                    <ul>
                        {
                            //says hi to user if he exists
                            (user)&&(
                            <li>
                                <p id="accountInfo">
                                {"Hi, "+user.email.substring(0, user.email.lastIndexOf("@"))}
                                </p>
                            </li>)
                        }
                        <li>
                            <Link to={(!user)?"/Login":"/"}
                            onClick={()=>{
                                removeBlur()
                                Close()
                                handleAuth()
                            }}>
                            
                            <i className="fas fa-sign-in-alt"></i> {(user)?"Logout":"Login"}
                            </Link>
                        </li>

                        <li><Link to="/Signup" onClick={removeBlur}><i className="fas fa-user-plus"></i>Create Account</Link></li>                    
                    </ul>
                </div>
                </li>
                <li>
                    <Link to="" className="nav__a">Categories<i className="fa fa-sort-desc" aria-hidden="true"></i></Link>
                    <div className="sub-menu1 nav__li1">
                        <ul>
                        {
                            Categories.map(x =>(
                                <li key={uuid()}>
                                    <Link to={`/${x.category}`} onClick={removeBlur}>
                                        <i className={x.icon}></i>{x.category}
                                    </Link>
                                </li>))
                        }        
                        </ul>
                    </div>
                </li>

                 <li >
                    <Link className="nav__a" to="">Offers<i className="fa fa-sort-desc" aria-hidden="true"></i></Link>
                    <div className="sub-menu1">
                        <ul>
                            <li><Link to="Payment.php" onClick={removeBlur}><i className="fas fa-money-bill-alt"></i> Payment</Link></li>
                            <li><Link to="TopBuys.php" onClick={removeBlur}><i className="fas fa-shopping-cart"></i> Top Buys</Link></li>                   
                        </ul>
                    </div>
                </li>

                <li >
                    <Link className="nav__a" to="">Coming Up<i className="fa fa-sort-desc" aria-hidden="true"></i></Link>
                    <div className="sub-menu1">
                        <ul>
                            <li>
                                <Link to="0UserGuide.php" onClick={removeBlur}>
                                <i className="fas fa-headset"></i> Live Chat</Link>
                            </li>              
                        </ul>
                    </div>
                </li>

                <li>
                    <Link className="nav__a" to="">
                        Help<i className="fa fa-sort-desc" aria-hidden="true"></i>
                    </Link>
                    <div className="sub-menu1">
                        <ul>
                            <li>
                                <Link to="0UserGuide.php" onClick={removeBlur}>
                                <i className="fas fa-book-reader"></i> User Guide</Link>
                            </li>
                            <li><Link to="Support.php" onClick={removeBlur}><i className="fas fa-question-circle"></i> Support</Link></li>
                            <li><Link to="AboutUs.php" onClick={removeBlur}><i className="fas fa-info-circle"></i> About Us</Link></li>                 
                        </ul>
                    </div>
                </li>
           </ul>
        </nav>
        </>
    )
}

export default Nav
