import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import mbBanner from "./../images/mb-destination-projects-web.png";

const homeType = [
  {
    id: 1,
    type: "Buy",
    content: <h1>Buy</h1>,
  },
  {
    id: 2,

    type: "Rent",
    content: <h1>Rent</h1>,
  },
  {
    id: 3,

    type: "PG",
    content: <h1>PG</h1>,
  },
  {
    id: 4,

    type: "Plot",
    content: <h1>Plot</h1>,
  },
  {
    id: 5,

    type: "Commercial",
    content: <h1>Commercial</h1>,
  },
];

const Container = styled.div`
  margin-top: 5rem;
  .title {
    font-size: 28px;
    color: #303030;
    margin-top: -25px;
    text-align: center;
    line-height: 66px;
  }
  .intro_container {
    display: flex;
    margin: 0 5vw;
  }
  .intro_banner {
    border-radius: 5px;
  }
  .intro_left {
    width: 70%;
    margin-right: 20px;
  }
  .intro_tab {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
  .intro_cont {
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 25px;
    height: 3rem;
    text-align: center;
    align-items: center;
  }
  .active {
    position: relative;
    border-bottom: 1px solid red;
    transition: width 2s;
    transition-timing-function: linear;
  }
  .active::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  .active:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ${
    "" /*   
.intro_tab {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

.mynav li:not(:last-child) {
  margin-right: 20px;
}

.mynav a {
  display: block;
  font-size: 20px;
  color: black;
  text-decoration: none;
  padding: 7px 15px;
} */
  }

  .target {
    position: absolute;
    border-bottom: 4px solid transparent;
    z-index: -1;
    transform: translateX(-60px);
  }

  .mynav a,
  .target {
    transition: all 0.35s ease-in-out;
  }
`;

function IntroBody() {
  let [homeContent, setHomeContent] = useState(homeType[0].content);
  console.log(homeType);

  (function () {
    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".intro_tab span");
    const colors = [
      "deepskyblue",
      "orange",
      "firebrick",
      "gold",
      "magenta",
      "black",
      "darkblue",
    ];

    function mouseenterFunc() {
      if (!this.parentNode.classList.contains("active")) {
        //   for (let i = 0; i < links.length; i++) {
        //     if (links[i].parentNode.classList.contains("active")) {
        //       links[i].parentNode.classList.remove("active");
        //     }
        //     links[i].style.opacity = "0.25";
        //   }

        //   this.parentNode.classList.add("active");
        //   this.style.opacity = "1";

        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left + window.pageXOffset;
        const top = this.getBoundingClientRect().top + window.pageYOffset;
        const color = colors[Math.floor(Math.random() * colors.length)];

        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
        target.style.transform = "none";
      }
    }

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => e.preventDefault());
      links[i].addEventListener("mouseenter", mouseenterFunc);
    }

    function resizeFunc() {
      const active = document.querySelector(".mynav li.active");

      if (active) {
        const left = active.getBoundingClientRect().left + window.pageXOffset;
        const top = active.getBoundingClientRect().top + window.pageYOffset;

        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
      }
    }

    window.addEventListener("resize", resizeFunc);
  })();

  useEffect(() => {
    console.log(window.location.href);
    setHomeContent(homeType[0]);
    console.log("First", homeType[0]);
  }, []);

  return (
    <Container>
      <div className="intro_container">
        <div className="intro_left">
          <p className="title">Find a home you'll love</p>
          <div className="intro_tab">
            <span>Buy</span>
            <span>Rent</span>
            <span>PG</span>
            <span>Plot</span>
            <span>Commercial</span>
            <span>Post Free Property Ad</span>
          </div>
          <div className="intro_cont">
            <div>Bangalore</div>
            <div>Add more</div>
            <div>Flat +1</div>
            <div>Budget</div>
            <div>Search</div>
          </div>{" "}
          <input type="text" placeholder="Enter" />
        </div>
        <img
          className="intro_banner"
          src={mbBanner}
          width="272"
          height="168"
          alt=""
        />
      </div>
      <h2>Practice</h2>
      <div className="intro_left">
        <p className="title">Find a home you'll love</p>
        <div className="intro_tab">
          {homeType.map((home) => (
            <span
              key={home.id}
              onClick={(e) => {
                setHomeContent(home);
              }}
            >
              {home.type}
            </span>
          ))}
          <span class="target"></span>

          {homeType.map((home) => (
            <span
              key={home.id}
              onClick={(e) => {
                setHomeContent(home);
              }}
              className={`${homeContent.id === home.id ? "active" : ""}`}
            >
              {home.type}
            </span>
          ))}
        </div>
        <div>{homeContent.content}</div>
        {/* <div className="intro_tab">
          <span>Buy</span>
          <span>Rent</span>
          <span>PG</span>
          <span>Plot</span>
          <span>Commercial</span>
          <span>Post Free Property Ad</span>
        </div> */}
      </div>
    </Container>
  );
}

export default IntroBody;
