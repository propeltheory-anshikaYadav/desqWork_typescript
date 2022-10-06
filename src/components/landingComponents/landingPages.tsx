import React from "react";
import {Routes, Route} from "react-router-dom"
import Body from "../bodypages/body";
import Header from "./headerBar";
import SideBar from "./sideBar";
export default function LandingPages(){
    return(
        <>
        <Header/>
        <SideBar/>
        <Routes>
            <Route path="/" element={<Body/>}></Route>
        </Routes>
        </>
    )
}