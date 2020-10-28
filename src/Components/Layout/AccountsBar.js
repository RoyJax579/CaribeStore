import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../Config/fbConfig'
import { context } from '../../Context/contextProvider'
import "../../CSS/AccountsBar.css"

function AccountsBar() {
    const {state} = useContext(context)

    const {user} = state

    const closeAccount = ()=>{
        const accountBar = document.getElementById("accountBar");
        const blur = document.getElementById("blur");

        accountBar.style.visibility = "visible";
        accountBar.style.right = "-320px";    
        blur.style.display = "none";
    }

    const removeBlur = () => {
        const blur = document.getElementById("blur");
        blur.style.display = "none";
    }

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
         <div className="accounts" id="accountBar">
            <div className="close">
                <i id="close" className="fas fa-times closeButt" onClick={closeAccount}></i>
            </div>
            <h1>Account</h1>
            { 
                (user)&&(
                    <p id="accountInfo">
                    {"Hi, "+user.email.substring(0, user.email.lastIndexOf("@"))}
                    </p>
                )
            }
            <Link to={(!user)&&"/Login"} onClick={
                ()=>{
                    handleAuth()
                    closeAccount()
                    removeBlur()
                }
            }>
            <i className="fas fa-sign-in-alt"></i>{(user)?" Logout":" Login"}
            </Link>
            <Link to="/Signup" onClick={removeBlur}>
            <i className="fas fa-user-plus"></i> Sign Up
            </Link>
         </div>   
        </>
    )
}

export default AccountsBar
