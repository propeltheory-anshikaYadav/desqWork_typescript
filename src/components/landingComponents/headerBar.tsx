import React from "react";
import {Link} from "react-router-dom"
export default function Header(){
    return(
        <>
        <div className="headerBar">
            <div className="container">
                <div className="left_container">
                    <Link to='/' className="Company_Name"> Desq<span>Work</span></Link>
                   
                </div>
                
            </div>
        </div>
        </>
    )
}