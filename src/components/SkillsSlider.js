import React from "react";
import "./SkillsSlider.css";

const ImageSlider = ({ images }) => {
  const imageList = images || [
    "iphone.jpg", "mchild.jpg","mcat.jpg", "iphone.jpg", "mchild.jpg","mcat.jpg", "iphone.jpg", "mchild.jpg","mcat.jpg"]

  const repeatCount = 4; // repeat for smooth infinite scroll
  const repeatedImages = Array.from({ length: repeatCount }).flatMap(
    () => imageList
  );

  return (
    <div className="image-slider">
      <h1>🚨 Emergency Section 🚨</h1>
      <div className="slider-row row1">
        <div className="slider-track">
          {repeatedImages.map((img, i) => (
            <div className="image-box" key={`img-${i}`}>
              <img src={img} alt={`skill-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
