import React from "react";
import "./Home.css";
import ImgSlider from './ImgSlider'
import Viewer from "./Viewer";
function Home() {

  return (
    <div className="Home">
      <ImgSlider/>
      <Viewer/>
    </div>
  );
}


export default Home;
