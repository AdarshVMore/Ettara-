import React from "react";
import "./home.css";
import cont1 from "../../imgs/cont1.png";
import cont2 from "../../imgs/cont2.png";
import cont31 from "../../imgs/cont31.png";
import cont32 from "../../imgs/cont32.png";
import cont33 from "../../imgs/cont33.png";
import cont34 from "../../imgs/cont34.png";
import logo from "../../imgs/logo.png";

function Home() {
  return (
    <div>
      <div className="container1">
        <div className="text">
          <h1>
            A cup of coffee <br /> can complete <br /> your day
          </h1>
          <p>
            A quality of coffeecan vary greatly depending on how it is <br />{" "}
            proccesses and how the coffee beans are grown
          </p>
          <div className="atag">
            <a href="home">Get Started</a>
          </div>
        </div>
        <div className="img">
          <img src={cont1} alt="" />
        </div>
      </div>
      <div className="container2">
        <div className="img">
          <img src={cont2} alt="" />
        </div>
        <div className="text">
          <p className="top">Our Coffee</p>
          <h2>
            Choose your <br /> Favourite Black <br /> coffee
          </h2>
          <p className="bottom">
            Indulge in our handcrafted coffee and delicious pastries that are{" "}
            <br /> sure to satisfy your cravings any time of the day.{" "}
          </p>
          <div className="btns">
            <a href="home">Buy Now</a>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="text">
          <h2>Our Shop</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            consequuntur <br /> iure impedit. Autem tempore possimus dolor
          </p>
        </div>
        <div className="imgs">
          <div className="imgs1">
            <img src={cont31} alt="" />
            <img src={cont32} alt="" />
          </div>
          <div className="imgs2">
            <img src={cont33} alt="" />
            <img src={cont34} alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="upper">
          <div className="divs">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolt amet <br /> consectetur .
              </p>
              <ul>
                <li>
                  <a href="">tw</a>
                </li>
                <li>
                  <a href="">li</a>
                </li>
                <li>
                  <a href="">fb</a>
                </li>
                <li>
                  <a href="">in</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="another-divs">
            <h3>About</h3>
            <p>HUMAN begin</p>
            <p>tends to take.</p>
            <p>their five.</p>
            <p>Basic senses</p>
          </div>
          <div className="another-divs">
            <h3>Address</h3>
            <p>HUMAN begin</p>
            <p>tends to take.</p>
            <p>their five.</p>
            <p>Basic senses</p>
          </div>
          <div className="another-divs">
            <h3>Contact</h3>
            <p>HUMAN begin</p>
            <p>tends to take.</p>
            <p>their five.</p>
            <p>Basic senses</p>
          </div>
          <div className="another-divs">
            <h3>Blog</h3>
            <p>HUMAN begin</p>
            <p>tends to take.</p>
            <p>their five.</p>
            <p>Basic senses</p>
          </div>
        </div>
        <p className="bottom">2023, All rights powered by Code N Chill</p>
      </div>
    </div>
  );
}

export default Home;
