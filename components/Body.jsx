import RestaurantCard from "./RestaurantCard";
import SWIGGY_API from "../utils/mockData";
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react";

const Body = ()=>{
  const [restaurantList,setRestaurantList] = useState([])
  const [searchText,setSearchText] = useState("")
  const [searchRestaurantList,setSearchRestaurantList]=useState([])

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async ()=>{
      try{
        const restaurantApiResponse = await fetch(SWIGGY_API)
        if(restaurantApiResponse.ok){
          const restaurantApiJson = await restaurantApiResponse.json()
          if(restaurantApiJson?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
          {
            setRestaurantList(restaurantApiJson?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
            setSearchRestaurantList(restaurantApiJson?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
          }
          console.log("hsjs")
        }
      }
      catch(e){
        console.log(e)
      }}

    const handleSearch = ()=>{
      let searchRes=restaurantList.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
      setSearchRestaurantList(searchRes)
    }
  
    const filterTopRes=()=>{
      setRestaurantList(restaurantList.filter((restaurant)=> restaurant.info.avgRating > 4))
    }
    
    return restaurantList.length === 0 ?  <Shimmer/> : (
        <div className="body">
            <div className="filter">
              <div className="search-container">
                <input className="searchbar" type="text" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value)
                  }}/>
                <button className="search-btn" onClick={handleSearch}>Search</button>
              </div>
              <button className="filter-btn" onClick={filterTopRes}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
              {
                searchRestaurantList.length ===0 ? <div>Not found</div> : (searchRestaurantList.map((data)=><RestaurantCard key={data?.info?.id} resData={data}/>))
              }
            </div>
        </div>
    )
}
export default Body