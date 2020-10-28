import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../CSS/Header2.module.css"

function Header2() {
    return (
        <>
        <header className={styles.header2}>
            <div className={styles.Logo}>
                <Link to="/">
                    <span>C</span>aribe<span>S</span>tore
                </Link> 
            </div>
        </header>  
        </>
    )
}

export default Header2
