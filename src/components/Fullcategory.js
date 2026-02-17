import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fullarea.css";
import "./category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faBagShopping,
  faGem,
  faClock,
  faUser,
  faFileAlt,
  faKey,
  faPuzzlePiece,
  faLaptop,
  faHatCowboy,
  faShirt,
  faDog,
  faFootball,
  faCar
} from "@fortawesome/free-solid-svg-icons";

const Fullarea = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const categories = [
    { id: 1, name: "People", icon: faUser },
    { id: 2, name: "Phones & Tablets", icon: faMobileScreenButton },
    { id: 3, name: "Pets", icon: faDog },
    { id: 4, name: "Bags", icon: faBagShopping },
    { id: 5, name: "Jewelry", icon: faGem },
    { id: 6, name: "Watches", icon: faClock },
    { id: 7, name: "Documents", icon: faFileAlt },
    { id: 8, name: "Automobile", icon: faCar },
    { id: 9, name: "Laptop", icon: faLaptop },
    { id: 10, name: "Toys", icon: faPuzzlePiece },
    { id: 11, name: "Fashion Accessories", icon: faHatCowboy },
    { id: 12, name: "Clothes & Shoes", icon: faShirt },
    { id: 13, name: "Sports Equipment", icon: faFootball },
    { id: 14, name: "Keys", icon: faKey }
  ];

 
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  
  const handlecat = (name) => {
   // navigate(`/category/${name}`);
   console.log(name);
  };

  return (
    <div className="area-page">
      <div className="area-container">
        <h1 className="area-title">
          <i className="fa-solid fa-bars"></i> Choose by Category
        </h1>

        <p className="area-subtitle">
          Select the category of the item you lost or found
        </p>

        
        <div className="lost-search-bar" id="ward-search">
          <i className="fa-solid fa-bars"></i>

          <input
            type="text"
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <i
            className="fa-solid fa-magnifying-glass"
            id="search-icon"
          ></i>
        </div>

        <div className="category-div-items" id="category-div">
          {filteredCategories.map((cat) => (
            <div
              className="category-items"
              key={cat.id}
              onClick={() => handlecat(cat.name)}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon={cat.icon}
                className="category-icon"
              />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>

        {/* ❌ No Result */}
        {filteredCategories.length === 0 && (
          <p className="no-result">No category found</p>
        )}
      </div>
    </div>
  );
};

export default Fullarea;
