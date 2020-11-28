import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../../Config/fbConfig"
import "../../CSS/Login.css"
const Login = ()=>{

    const history = useHistory()

    const [userInfo, setUserInfo] = useState({
        email:"",
        password: ""
    })

    const {email, password} = userInfo
    
    const loginUser = e => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                if (auth){
                    history.push("/")
                    alert(auth.user.email+" has succesfully logged in!")
                }
                
            })
            .catch(error => alert(error.message))
    }

    return (
        <>
        <div className="Login_Display">
            <div className="Login">

                <h1>Login</h1>
                <form>
                    <p>Email:</p>
                    <input type="text" name="usermail" placeholder="Enter Email or Username" 
                    value={email}
                    onChange={e => setUserInfo({...userInfo, email: e.target.value})
                    }
                    required />

                    <p>Password:</p>
                    <input type="password"
                    placeholder="Enter Password" 
                    value={password}
                    onChange={e => setUserInfo({...userInfo, password: e.target.value})
                    }
                    required /><br />

                    <button type="submit" onClick={loginUser}>Login</button>
                </form>
                <br /><Link to="/Signup">Don't have an account</Link> 
            </div>                   
        </div>
        </>
    )
}

export default Login