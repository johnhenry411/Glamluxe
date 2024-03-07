import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroVideo from '../../assets/images/landing-images/background.jpg'
import "./landing.css"
import { ResetLocation } from "../../helpers/ResetLocation";

const Landing = ({ changeCategory }) => {
  useEffect(() => {
    document.title = "Glam Luxe";
  }, []);
  return (
    <main className="landing">
      <article className="hero">
        <h2>we stock and deliver quality products for homes, hotels and hospitals</h2>
        <h1 className="more"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
</svg></h1>
<img src={HeroVideo} type="jpeg" alt="" />
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