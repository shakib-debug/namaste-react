import {useState} from "react"

const Loginbtn=()=>{
    const [btnName,setBtnName]=useState("Login")
    const changeState = ()=>{
        if(btnName==="Login")
        {
            setBtnName("Logout")
        }
        else
        {
            setBtnName("Login")
        }
    }
    return(
        <button className="login-btn" onClick={changeState}>{btnName}</button>
    )
}
export default Loginbtn