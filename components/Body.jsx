import RestaurantCard from "./RestaurantCard";
import SWIGGY_API from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = ()=>{
  let [restaurantList,setRestaurantList] = useState([])

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async ()=>{
      try{
        const restaurantApiResponse = await fetch(SWIGGY_API)
        if(restaurantApiResponse.ok){
          const restaurantApiJson = await restaurantApiResponse.json()
          setRestaurantList(restaurantApiJson?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        }
      }
      catch(e){
        console.log(e)
      }}
  
    const filterTopRes=()=>{
      setRestaurantList(restaurantList.filter((restaurant)=> restaurant.info.avgRating > 4))
    }
   
    return(
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={filterTopRes}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
              {
                restaurantList.map((data)=><RestaurantCard key={data?.info?.id} resData={data}/>)
              }
            </div>
        </div>
    )
}
export default Body