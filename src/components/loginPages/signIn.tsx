import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom"
interface Inputs {
    userName?: any,
        password?: any,
        email?: any,
        confirmPassword?:any,
  }
export default function SignIn(props:any) {
   
    const location = useLocation();
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    })
    const [records, setRecords] = useState<Inputs[]>([
            {userName: 'abcd', password: 1234, confirmPassword: 1234, email: 'abcd.com'},
            {userName: 'xyz', password: 5678, confirmPassword: 5678, email: 'xyz.com'},
            location.state
         ]);
    const inputFieldChange = (e:any) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }
    console.log("location-",location)
    console.log("state-",location.state)
    const handleSubmit = (e:any) => {
        e.preventDefault()
            for(let data of records){
                if( data.email === inputData.email ){
                    navigate('/signIn')
                }else {
                    console.log('not matched');
                }
            }
        
    }

    return (
        <>
            <div className="signIn_mainContainer">
                <div className="signIn_leftSection">
                    <h2>Desq<span>Work</span></h2>
                    <div className="signIn_content">
                        <h2>Welcome to Desq<span>Work</span></h2>
                        <p>
                            Welcome To Invome
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        </p>
                    </div>
                </div>
                <div className="signIn_rightSection">
                    <h2>Sign In</h2>
                    <p>Sign in by entering information below</p>
                    <form action="" onSubmit={handleSubmit} className="signIn_form">
                        <div>
                            <label htmlFor="">Email</label><br />
                            <input  type="text" name="email" id="" className="signIn_inputBox" onChange={inputFieldChange} />
                        </div>
                        <div>
                            <label htmlFor="">Password</label><br />
                            <input type="password" name="password" id="" className="signIn_inputBox" onChange={inputFieldChange} />
                        </div>
                        <div> <input type="checkBox" name="" id="checkBox" /> <span>Remember my preferance</span> 
                        </div>
                        <button className="signInBtn">Sign In</button>
                        {/* <button className="signInBtn">Sign In</button> */}
                        </form>
                        <p>Don’t have an account? <span><Link to="/signUp" className="signUp_link"> Sign Up</Link></span></p>
                </div>
            </div>
        </>
    )
}