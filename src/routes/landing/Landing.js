import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroVideo from '../../assets/images/landing-images/background.jpg'; // Import HeroVideo if needed
import "./landing.css";
import { ResetLocation } from "../../helpers/ResetLocation";
import ImageSlider from "./ImageSlider";

// Import images
import backgroundImg from '../../assets/images/landing-images/background.jpg';
import gridFiveImg from '../../assets/images/landing-images/gridFive.jpeg';
import gridFourImg from '../../assets/images/landing-images/gridFour.jpeg';
import gridOneImg from '../../assets/images/landing-images/gridOne.jpeg';
import gridThreeImg from '../../assets/images/landing-images/gridThree.jpeg';
import gridTwoImg from '../../assets/images/landing-images/gridTwo.jpeg';

const Landing = ({ changeCategory }) => {
  useEffect(() => {
    document.title = "Glam Luxe";
  }, []);

  const slides = [
    { url: backgroundImg, title: 'background' },
    { url: gridFiveImg, title: 'gridFive' },
    { url: gridFourImg, title: 'gridFour' },
    { url: gridOneImg, title: 'gridOne' },
    { url: gridThreeImg, title: 'gridThree' },
    { url: gridTwoImg, title: 'gridTwo' }
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    paddingTop: "50px" // Add your desired padding value here
};

  return (
    <main className="landing">
      <article className="hero">
        <div>
          <div style={containerStyles}>
          <ImageSlider slides={slides}/>
          </div>
         <h1 className="more"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
   <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
 </svg></h1>
</div>
      </article>
      <article className="grid">
        <section className="grid-one">
          <Link
            to={`/store/blouses`}
            className="custom-btn grid-button"
            onClick={() => {
              changeCategory("blouses");
              ResetLocation();
            }}
          >
            <span>Blouses</span>
          </Link>
        </section>
        <section to="" className="grid-two">
          <Link
            to={`/store/jeans`}
            onClick={() => {
              changeCategory("jeans");
              ResetLocation();
            }}
            className="custom-btn grid-button"
          >
            <span> Jeans</span>
          </Link>
        </section>
        <section to="" className="grid-three">
          <Link
            to={`/store/shoes`}
            onClick={() => {
              changeCategory("shoes");
              ResetLocation();
            }}
            className=" custom-btn grid-button"
          >
            <span> Shoes</span>
          </Link>
        </section>
        <section to="" className="grid-four">
          <Link
            to={`/store/dresses`}
            onClick={() => {
              changeCategory("dresses");
              ResetLocation();
            }}
            className="custom-btn grid-button"
          >
            <span>Dresses</span>
          </Link>
        </section>
        <section className="grid-five">
          <Link
            to={`/store/all`}
            onClick={() => {
              changeCategory("all");
              ResetLocation();
            }}
            className="custom-btn grid-button"
          >
            <span>Store</span>
          </Link>
        </section>
      </article>
    </main>
  );
}


export default Landing;