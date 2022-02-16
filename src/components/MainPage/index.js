import React, { useState } from "react";
import "./index.css";

const MainPage = ({ data }) => {
  const [query, setQuery] = useState([]);

  const handleSearch = (event) => {
    const { value } = event.target;
    let search = [];
    data.find((item) => {
      const { name } = item;
      if (name.toLowerCase().includes(value.toLowerCase())) {
        search.push(item);
      }
    });
    setQuery(search);
  };

  let showData = query.length > 0 ? query : data;

  return (
    <div className="main-cont">
      <div className="input-div">
        <input type="text" placeholder="search" onChange={handleSearch} />
      </div>
      {showData.map((item) => {
        const { id, name, price, cloudinaryImageId, description } = item;
        return (
          <div className="dishes" key={id}>
            <div className="name-price">
              <p className="name">{name}</p>
              <p className="price">{price}</p>
              <p className="desc">{description}</p>
            </div>
            <div className="dish-img">
              <img src={cloudinaryImageId} alt="img" />
              <button onClick={console.log(name)}>Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainPage;
