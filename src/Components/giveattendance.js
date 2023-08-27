import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import './SignInSignUp.css';
function Sign(){
    const nae=useRef();

    const handleclk=()=>{
        const m=localStorage.getItem("name",nae.current.value);
        console.log(m);
        if(m==nae.current.value){
            
            alert("You have already given attendance");
        }
        else{
        document.getElementsByClassName('ms')[0].innerHTML="Hii " + nae.current.value +" Your attendance has been marked successfully";

        }
        
        
        
    }
    return(
        <div>
                <div className="container">
                    <div className="ms"></div>
                    
                   
                        <div className="input_space">
                            <input placeholder="Type your Register Number"  type='text'  maxLength={15}/>
                        </div>
                        <div className="input_space">
                            <input placeholder="Type your name" ref={nae} type='text'  />
                        </div>
                        <button onClick={handleclk}>Mark the Attendance</button>
                </div>
                
        </div>
            
    );
}
export default Sign;