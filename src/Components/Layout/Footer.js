import React from 'react'
import { Link } from 'react-router-dom'
import "../../CSS/Footer.css"

function Footer() {
    return (
        <>
        <footer>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Policy.php">Policy</Link></li>
                <li><Link to="Support.php">Support</Link></li>
                <li><p>CaribeStore 2020</p></li>
            </ul>
        </footer>
        </>
    )
}

export default Footer
