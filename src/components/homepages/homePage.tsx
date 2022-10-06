import React from "react";
import { Routes, Route } from "react-router-dom";
import Body from "../bodypages/body";
import LandingPages from "../landingComponents/landingPages";
import SignIn from "../loginPages/signIn";
import SignUp from "../loginPages/signUp";
export default function HomePage(){
    return(
        <>
           <div >
            
             <Routes>
                <Route path="/" element={<SignIn/>}></Route>
                <Route path="/signUp" element={<SignUp/>}></Route>
                <Route path="/backToSigin" element={<SignIn/>}></Route>
                <Route path="/createAccount" element={<SignIn/>}></Route>
                <Route path="signIn" element={<LandingPages/>}></Route>
            </Routes> 
            {/* <LandingPages/> */}
           </div>
        </>
    )
}