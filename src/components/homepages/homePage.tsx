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
                {/* <Route path="/signIn" element={<Body/>}></Route> */}
                <Route path="/createAccount" element={<SignIn/>}></Route>
                {/*<Route path="/createAccount" element={<SignIn/>}></Route>
                
                <Route path='/' element={<Body/>}></Route>
                 <Route path="/newBooking" element={<NewBooking/>}></Route>
                 <Route path="/manageBooking" element={<ManageBooking/>}></Route>
                <Route path='/dashborad' element={<Body/>}></Route>
                <Route path='/invoicelist' element={<InvoiceList/>}></Route>
                <Route path='/myteam' element={<MyTeam/>}></Route>
                <Route path='/enquiry' element={<Enquiry/>}></Route>
                <Route path='/password' element={<OldPassword/>}></Route>
                <Route path='/changepassword' element={<ChangePassword/>}></Route>
                <Route path="/profileSeting" element={<ProfileInfo/>}></Route>
                <Route path="/profileInfo" element={<ProfileInfo/>}></Route>
                <Route path="/addNewMember" element={<AddNewMember/>}></Route>
                <Route path="/newbookinContinue" element={<BookingSummary/>}></Route>
                <Route path="/proceedToPay" element={<Payment/>}></Route>*/}
            </Routes> 
            <LandingPages/>
           </div>
        </>
    )
}