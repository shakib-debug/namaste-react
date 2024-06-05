import {LOGO_URL} from "../utils/constants"
import Loginbtn from "./Loginbtn.jsx"

const Header = ()=>{
    console.log("hello")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><Loginbtn/></li>
                </ul>
                
            </div>
        </div>
    )
}
export default Header