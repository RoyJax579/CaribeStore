import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import "../../CSS/Home.css"
import HomeCategories from '../../Functions/Home/HomeCategories'
import Offers from "../../Functions/Home/Offers"

const Home = () => {
    return (
        <>
        <Helmet>
          <title>{`Home | CaribeStore`}</title>
        </Helmet>
        <section className="img_bar">
            <h1>Welcome to <span>C</span><span   className="text">aribe</span><span>S</span><span   className="text">tore</span>
            </h1>
            <h3>The place where there's never a shortage of items!</h3>
            
            <div className="Links">
                <Link to="/Signup">Sign Up</Link>
                <Link to="AboutUs.php">About us</Link> 
            </div>
            
        </section>

        <section className="offers">
            {Offers()}
        </section>       

        <div className="categorySect">
        
            <div className="header">
                <i className="fa fa-bars"></i><p>Our Categories</p>
            </div>

            <div className="categories">
                {HomeCategories()}
            </div>
        </div>
        </>
    )
}

export default Home
