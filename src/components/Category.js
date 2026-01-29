import React from "react";
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
import "./category.css"
const Category = () => {
    const categories = [
  { id: 1, name: "Phones & Tablets", icon: faMobileScreenButton },
  { id: 2, name: "Bags", icon: faBagShopping },
  { id: 3, name: "Jewelry", icon: faGem },
  { id: 4, name: "Watches", icon: faClock },
  { id: 5, name: "People", icon: faUser },
  { id: 6, name: "Documents", icon: faFileAlt },
  { id: 7, name: "Keys", icon: faKey },
  { id: 8, name: "Toys", icon: faPuzzlePiece },
  { id: 9, name: "Laptop", icon: faLaptop },
  { id: 10, name: "Fashion Accessories", icon: faHatCowboy },
  { id: 11, name: "Clothes & Shoes", icon: faShirt },
  { id: 12, name: "Pets", icon: faDog },
  { id: 13, name: "Sports Equipment", icon: faFootball },
  { id: 14, name: "Automobile", icon: faCar }
];

  return (
    <div className='category-main-div'>
      <h1> <i class="fa-solid fa-bars"></i> Choose by Category</h1>
      <div className='category-div-items'>
       {categories.map((cat) => (
          <div className="category-items" key={cat.id}>
            <FontAwesomeIcon icon={cat.icon} className="category-icon"/>
            <h3>{cat.name}</h3>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Category
