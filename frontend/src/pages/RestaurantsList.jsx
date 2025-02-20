import React, { useEffect, useState } from "react";
import "../css/restaurants.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close"; 
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const RestaurantsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/restaurants");
        if(!response){
          throw new Error("Failed to fetch restaurants")
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter(({ name, list }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    list.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearSearch = () => {
    setSearchQuery(""); 
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="restaurants_bg">
        <div className="restaurant_bg_sub">
          <h1>Search your <span>Restaurant</span> or <span>Cuisine</span></h1>
          <div className="restaurants_search">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search restaurants or cuisine..."
            />
            <SearchIcon className="search_icon" />
            {searchQuery && (   
              <CloseIcon onClick={clearSearch} className="clear_icon" />
            )}
          </div>
        </div>
      </div>
      <div className="restaurants_main_list">
        <div className="restaurants_list">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error : {error}</h1>
          ) : filteredRestaurants.length > 0 ? (
            filteredRestaurants.map(({ name, cuisine, image, rating, id }) => (
              <Link key={id} className="card" to={`/restaurants/${id}/menu`}>
                <div className="restaurants_card">
                  <div className="restaurants_img">
                    <img src={image} alt="restaurant" /> 
                  </div>
                  <div className="restaurants_details">
                    <div className="one">
                      <h1>{name}</h1>
                      <span>
                        {rating}
                        <StarIcon className="star_icon" />
                      </span>
                    </div>
                    <div className="two">
                      <p>{cuisine}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="no_restaurants">
              <h1>No restaurants found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantsList;