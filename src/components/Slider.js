import { useEffect, useState } from "react";
import "./slider.css";

const people = [
  { name: "Alex", role: "Frontend", img: "/personicon.jpg" },
  { name: "Maria", role: "Designer", img: "/personicon.jpg" },
  { name: "John", role: "Backend", img: "/personicon.jpg" },
  { name: "Sara", role: "Fullstack", img: "/personicon.jpg" },
  { name: "David", role: "DevOps", img: "/personicon.jpg" },
  { name: "Emma", role: "Mobile", img: "/personicon.jpg" }
];

// clone array
const extendedPeople = [...people, ...people];

export default function TeamSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= people.length) {
      setTimeout(() => {
        document.querySelector(".slider-track").style.transition = "none";
        setIndex(0);
        setTimeout(() => {
          document.querySelector(".slider-track").style.transition =
            "transform 0.7s cubic-bezier(0.4,0,0.2,1)";
        }, 50);
      }, 700);
    }
  }, [index]);

  return (
    <div className="slider-container">
        <h1 className="slider-h1">Heroes of the month</h1>
        <p>Heroes are those who never take anything for granted even after getting a chance and remains honest in their lives!</p>
      <div
        className="slider-track-div"
    style={{
  transform: `translateX(calc(-${index} * (280px + 16px)))`
}}

      >
        {extendedPeople.map((p, i) => (
      <div className="card" key={i}>
  <div className="card-img"></div>
  <div className="slider-role">
    <h2>{p.name}</h2>
    <p>{p.role}</p>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}
