import React, { useState } from "react";
import styled from "styled-components";
import Sliderdata from "./SliderData";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = Sliderdata.length;
  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  setTimeout(() => {
    nextSlide();
  }, 2500);
  return (
    <Carousel>
      <LeftButton onClick={prevSlide}>&lt;</LeftButton>
      <RightButton onClick={nextSlide}>&gt;</RightButton>
      {Sliderdata.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} key={slide.id} alt={slide.text} />
            )}
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;

const Carousel = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  margin: 20px auto;
  img {
    width: 100%;
    display: block;
    z-index: 100;
    border-radius: 4px;
    box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
  }
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.02);
  }
`;
const LeftButton = styled.button`
  width: 50px;
  height: 50px;
  color: rgb(14, 29, 50);
  background-color: #9092bc;
  font-size: 2rem;
  border-radius: 50%;
  border: none;
  text-align: center;
  position: absolute;
  left: 4rem;
  cursor: pointer;
  z-index: 1;
  user-select: none;
  &:hover {
    transform: scale(0.95);
  }
`;
const RightButton = styled(LeftButton)`
  right: 4rem;
  left: auto;
`;
