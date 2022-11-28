import React from "react";
import styled from "styled-components";
import arrowDown from "../../../images/angle-small-down.svg";

let Container = styled.div`
  .bottomNav__link:after {
    position: absolute;
    display: inline-block;
    content: "";
    width: 20px;
    height: 20px;
    display: inline-block;
    -webkit-mask: url(${arrowDown}) no-repeat 50% 50%;
    mask: url(${arrowDown}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background-color: #d8232a;
    margin-top: 2px;
  }
  .bottomNav_dropCont:hover .bottomNav_dropdown {
    display: block;
  }
  .bottomNav_dropdown {
    color: #000;
    display: none;
    min-width: 948px;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    margin-top: -0.4rem;
    margin-left: -5rem;
    position: absolute;
    padding: 0 30px 20px 30px;
    border-radius: 8px;
    box-shadow: 0 3px 9px 0 rgb(48 48 48 / 20%);
    z-index: 1;
  }
  .bottomNav__link {
    color: #000;
    font-size: 16px;
    text-decoration: none;
    padding: 0 20px 8px 16px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 170px;
    border: 1px solid #fff;
    border-bottom: #000;
  }
  .bottomNav__link:hover {
    background-color: #fff;
    color: #d8232a;
    border-radius: 8px 8px 0 0;
    z-index: 3;
    /* position: absolute; */
    top: 0;
    left: 0;
    border: 1px solid #d7d7d7;
    border-bottom: none;
    padding: 0 20px 8px 16px;
  }

  .bottomNav_dropCont:has(> .bottomNav_dropdown:hover) .bottomNav__link {
    background-color: #fff;
    color: #d8232a;
    border-radius: 8px 8px 0 0;
    z-index: 3;
    /* position: absolute; */
    top: 0;
    left: 0;
    border: 1px solid #d7d7d7;
    border-bottom: none;
    padding: 0 20px 8px 16px;
  }
`;

function Help() {
  return (
    <Container>
      <div className="bottomNav_dropCont">
        <a href="a" className="bottomNav__link">
          Help
        </a>
        <div className="bottomNav_dropdown">
          <div className="flex_row">
            <div className="padY10-payX30">
              <p>Popular Choices</p>
              <hr />
              <p>Ready to move</p>
              <p>Owner properties</p>
              <p>Budget Homes</p>
              <p>Premium Homes</p>
              <p>Newly Launched</p>
            </div>
            <div className="padY10-payX30">
              <p>Popular Choices</p>
              <hr />
              <p>Ready to move</p>
              <p>Owner properties</p>
              <p>Budget Homes</p>
              <p>Premium Homes</p>
              <p>Newly Launched</p>
            </div>
            <div className="padY10-payX30">
              <p>Popular Choices</p>
              <hr />
              <p>Ready to move</p>
              <p>Owner properties</p>
              <p>Budget Homes</p>
              <p>Premium Homes</p>
              <p>Newly Launched</p>
            </div>
            <div className="padY10-payX30">
              <p>Popular Choices</p>
              <hr />
              <p>Ready to move</p>
              <p>Owner properties</p>
              <p>Budget Homes</p>
              <p>Premium Homes</p>
              <p>Newly Launched</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Help;
