import { FcRating } from "react-icons/fc";
import { CDN_URL } from "../utils/constants";

const RestaurantCard =({resData})=>{

    return(
        <div className="res-card">
            <img className="res-logo" style={{width:"190px",height:"150px",borderRadius:"10px",margin:"0px"}} alt="res-logo" src={CDN_URL+resData?.info?.cloudinaryImageId}/>
            <div>
            <h3 style={{marginTop:"0px"}}>{resData?.info?.name}</h3>
            <div style={{display:"flex",alignItems:"center",gap:"6px",marginTop:"-15px"}}>
                <span><FcRating /></span>
                <h4>{resData?.info?.avgRating}</h4>
                <span>•</span>
                <h4>{resData?.info?.sla?.slaString}</h4>
            </div>
            <p style={{fontSize:"15px",color:"grey"}}>{resData?.info?.cuisines.join(", ")}</p>
            </div>
        </div>
    )
}
export default RestaurantCard