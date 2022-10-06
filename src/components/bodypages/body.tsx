import React from "react";
import {Navigation} from "../data/navigationMenu"
import {Link} from 'react-router-dom';
export default function Body(){

    return(
        <>
         <div className="body_main_container">
            <div className="body_container">
            <div className="body_left_section">
                <div className="left_section_UpperContainer">
                    {
                        Navigation.map((data:any)=>{
                            return(
                                <>
                                 <div className="navBoxes" >
                                    <img src={data.image} alt="" />
                                     <Link to={data.path} className="navBoxes_link"><p>{data.name}</p></Link>
                                 </div>
                                </>
                            )
                        })
                    }
                </div>
                <p className="memberList">Member List</p>
            </div>
            <div className="body_right_container">
                 <div className="booking_duration">
                    <p>Booking Duration</p>
                 </div>
                 <div className="upcoming_booikng">
                    <p>Upcoming Booking</p>
                    <select name="" id=""></select>
                 </div>
                 <div className="department_meeting">
                    <p>Department Meeting</p>
                 </div>
                 <div className="connections">
                    <div className="connection_headerBar">
                        <div>
                            <p>Connections</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                 </div>
            </div>
            </div>
         </div>
        </>
    )
}