import React from "react";
import './SignInSignUp.css';
import Giveattendance from "./giveattendance.js";






function Home(){
    const logout=()=>{
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div>
            <div>
                <h1>Welcome SRMIST</h1>
                <p>Hello {localStorage.getItem('name')} 😊</p>
                <button onClick={logout} className="logout">LogOut</button>
                <Giveattendance/>
            </div>    
        </div>
    );
}
export default Home;