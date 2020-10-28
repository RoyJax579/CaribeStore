import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "../../CSS/SignUp.css"
import uuid from "uuid/dist/v1"
import { auth } from '../../Config/fbConfig';

function SignUp() {
    const domains = ["@gmail.com", "@yahoo.com","@hotmail.com","@aol.com","@msn.com","@outlook.com", "@zoho.com","@mail.com","@icloud.com","@yandex.com"];

    const history = useHistory()

    const [userInfo, setUserInfo] = useState({
        id: uuid(),
        emailStart: "",
        domain: "",
        password: ""
    })

    const signupUser = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(userInfo.emailStart+userInfo.domain, userInfo.pass2)
            .then(auth => {
                console.log(auth)
                if (auth){
                    history.push("/")
                }
                alert(auth.user.email+" has succesfully signed in!")
            })
            .catch(error => alert(error.message))
    }


    console.log(userInfo)

    return (
        <> 
        

        <div className="SignUp_Display">
            <form className="SignUp">
                <h1>Create Account</h1>
                    <p>Email:</p>
                    <input type="text" 
                    placeholder="Enter email"  
                    id="email" 
                    value={userInfo.emailStart} 
                    onChange={ e => setUserInfo({...userInfo, emailStart: e.target.value})
                    } 
                    required />

                    <select name="domain" 
                    value={userInfo.domain} 
                    onChange={e => setUserInfo({...userInfo, domain: e.target.value})
                    } 
                    required>
                        <option defaultChecked>---</option>
                        {
                            domains.map(x=><option key={uuid()}>{x}</option>)
                        }
                    </select>

                    <p>Password:</p>
                    <input type="password" 
                    placeholder="Enter password" 
                    value={userInfo.pass1} 
                    onChange={ e => setUserInfo({...userInfo, pass1: e.target.value})
                    } 
                    required/>

                    <div className="disclaimer"><span>i</span> Password must be atleat 8 characters</div>
                    
                    <button type="submit"
                    onClick={signupUser}
                    >Create Account</button>
                    <br />
                    <Link to="/Login">Login</Link> 
            </form>           
        </div> 
        </>
    )
}

export default SignUp
