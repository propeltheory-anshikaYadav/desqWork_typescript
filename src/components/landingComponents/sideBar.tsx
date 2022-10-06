import React from "react";
import {Link} from "react-router-dom" 

export default function SideBar(){
    return(
        <>
         <div className="sideBar_container">
            <div className="sideBar_links">

            <div> 
            <Link className="icons" to='/dashborad'><img src="images/img14.png" alt="" /> </Link>
         </div>
         <div>
         <Link to='/addNewUser'><img src="images/img15.png" alt="" /></Link>
         </div>
           <div>
           <Link to='/myteam'><img src="images/img16.png" alt="" /></Link>
            </div> 
           <div>
           <Link to='/enquiry'><img src="images/img17.png" alt="" /></Link><br />
           </div>
            <div>
            <Link to='/profileSeting'><img src="images/img10.png" alt="" /></Link>
            </div>
            
            </div>
         </div>
        </>
    )
}