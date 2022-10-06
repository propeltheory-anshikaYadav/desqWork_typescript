import { type } from "os";
import { stringify } from "querystring";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
interface Inputs {
    userName?: any,
        password?: any,
        email?: any,
        confirmPassword?:any,
  }

export default function SignUp() {
    const navigate = useNavigate();
    // const [records, setRecords] = useState<Inputs[]>([
    //     {userName: 'abcd', password: 1234, confirmPassword: 1234, email: 'abcd.com'},
    //     {userName: 'xyz', password: 5678, confirmPassword: 5678, email: 'xyz.com'}
    // ]);
    const [userInput, setUserInput] = useState<Inputs>({})
        


    const handleInput = (e:any) => {
        setUserInput({   
            ...userInput,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e:any) => {
        e.preventDefault();
        // const data = records;
        // data.push(userInput)
        // setRecords(data);
        navigate("/createAccount", { state: userInput })
    }
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newRecords = { ...userInput };
    //     setRecords([...records, newRecords]);
    //     console.log(records);
    //     setUserInput({ userName: "", email: "", password: "", confirmPassword: "" })

    // }
    return (
        <>
            <div className="signUp_mainContainer">
                <div className="signUp_leftSection">
                    <h2>Desq<span>Work</span></h2>
                    <div className="signUp_content">
                        <h2>Welcome to Desq<span>Work</span></h2>
                        <p>
                            Welcome To Invome
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        </p>
                    </div>
                </div>
                <div className="signUp_rightSection">
                    <h1>Register</h1>
                    <p>Sign up by entering information below</p>
                    <div >
                        <form action="" className="signUp_form" >
                            <div className="signUp_form_leftSection">
                            <div>
                                <label htmlFor="">Enter Name</label><br />
                                <input type="text" name="userName" id="" autoCapitalize="off" value={userInput.userName} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="">Password</label><br />
                                <input type="password" name="password" autoCapitalize="off" value={userInput.password} onChange={handleInput} />
                            </div>
                            <input type="checkBox" name="" id="privacyPolicy_text" /><span>I agree to all Privacy terms and Policies</span><br />
                            <button className="createAccount_btn" onClick={handleClick}>create account</button>
                            {/* <button onSubmit={handleSubmit} >
                                <Link  data={userInput}
                                state={{data:userInput}} to="/createAccount" >Create account</Link>
                            </button> */}
                            <p>Already Have an Account ? <span><Link to="/backToSigin">Sign In</Link></span></p>
                            </div>
                            <div className="signUp_form_rightSection">
                            <div>
                                <label htmlFor="">Enter Email</label><br />
                                <input type="text" name="email" autoCapitalize="off" value={userInput.email} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="">Confirm Password</label><br />
                                <input type="password" name="confirmPassword" id="" autoCapitalize="off" value={userInput.confirmPassword} onChange={handleInput} />
                            </div>
                            </div>
                           
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}