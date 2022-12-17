import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import mbBanner from "./../images/mb-destination-projects-web.png";

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
`;

function IntroBody() {
  useEffect(() => {
    console.log(window.location.href);
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
    </Container>
  );
}

export default IntroBody;
