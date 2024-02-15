import React from "react";

export default function Slider() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-50"
            src="https://images.pexels.com/photos/11001424/pexels-photo-11001424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-50"
            src="https://images.pexels.com/photos/11001424/pexels-photo-11001424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-50"
            src="https://images.pexels.com/photos/7014919/pexels-photo-7014919.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
        </div>
      </div>
    </div>
  );
}
