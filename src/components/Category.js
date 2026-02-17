import React from "react";
import { useNavigate } from "react-router-dom";
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
  { id: 1, name: "People", icon: faUser },
  { id: 2, name: "Phones & Tablets", icon: faMobileScreenButton },
  { id: 3, name: "Pets", icon: faDog },
  { id: 4, name: "Bags", icon: faBagShopping },
  { id: 5, name: "Jewelry", icon: faGem },
  { id: 6, name: "Watches", icon: faClock },
  { id: 7, name: "Documents", icon: faFileAlt },
  { id: 8, name: "Automobile", icon: faCar },
  { id: 9, name: "Laptop", icon: faLaptop },
  { id: 10, name: "Others", icon: faPuzzlePiece }
];
const navigate = useNavigate();
function handlecat(name){
if(name == "Others")
{
  navigate("/category");
}else{
  console.log(name);
}

}

  return (
    <div className='category-main-div'>
      <h1> <i class="fa-solid fa-bars"></i> Choose by Category</h1>
      <div className='category-div-items'>
       {categories.map((cat) => (
          <div className="category-items" key={cat.id}    onClick={() => handlecat(cat.name)}>
            <FontAwesomeIcon icon={cat.icon} className="category-icon"/>
            <h3>{cat.name}</h3>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Category
