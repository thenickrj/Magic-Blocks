import React from "react";
import styled from "styled-components";
import mb from "../../images/angle-small-down.svg";
import tick from "../../images/tick.svg";
import crownFill from "../../images/crown-fill.svg";

const Container = styled.div`
  .mb_prime_head {
  }
  .mb_header_prime_link {
    color: #fff;
    font-size: 16px;
    line-height: 47px;
    text-decoration: none;
    padding: 0 32px 0 16px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 170px;
    border: 1px solid #d8232a;
    border-bottom: none;
  }
  .mb_header_prime_link:after {
    position: absolute;
    display: inline-block;
    content: "";
    width: 20px;
    height: 20px;
    display: inline-block;
    -webkit-mask: url(${mb}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background-color: #fff;
    top: 14px;
    right: 10px;
  }
  .mb_header_prime_link:hover {
    background-color: #fff;
    color: #d8232a;
    border-radius: 8px 8px 0 0;
    z-index: 4;
    /* position: absolute; */
    top: 0;
    left: 0;
    border: 1px solid #d7d7d7;
    border-bottom-color: #fff;
  }
  .mb_header_prime_link:hover:after {
    background-color: #d8232a;
  }
  .mb_header__main__prime_dropdown {
    color: #000;
    z-index: 3;
    display: none;
    min-width: 340px;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    margin-top: -0.4rem;
    position: absolute;
    padding: 5px;
    border-radius: 0 8px 8px 8px;
    box-shadow: 0 3px 9px 0 rgb(48 48 48 / 20%);
  }
  .mb_prime_head:hover .mb_header__main__prime_dropdown {
    display: block;
  }
  .crown_img {
    position: relative;
    display: inline-block;
    content: "";
    width: 20px;
    height: 20px;
    display: inline-block;
    -webkit-mask: url(${crownFill}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background-color: #ffe632;
    margin: 5px;
  }
  .prime_banner {
    background-color: #29313b;
    ${"" /* width: 150px; */}
    ${"" /* height: 30px; */}
    margin: 5px;
    border-radius: 8px;
    text-align: center;
    color: #fff;
    padding: 8px;
  }
  .prime_banner_head1 {
    margin: 4px;
  }
  .prime_banner_head2 {
    margin: 8px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #e2be86;
    text-align: center;
  }
  .tick {
    position: relative;
    display: flex;
    margin-left: 3.5rem;
    align-items: center;
  }
  .tick:before {
    position: relative;
    display: inline-block;
    content: "";
    width: 15px;
    height: 15px;
    display: inline-block;
    -webkit-mask: url(${tick}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background-color: #008000;
    margin: 0 4px;
  }

  .mb_prime_head:has(> .mb_header__main__prime_dropdown:hover)
    .mb_header_prime_link {
    background-color: #fff;
    color: #d8232a;
    border-radius: 8px 8px 0 0;
    z-index: 4;
    /* position: absolute; */
    top: 0;
    left: 0;
    border: 1px solid #d7d7d7;
    border-bottom-color: #fff;
  }

  .mb_prime_head:has(> .mb_header__main__prime_dropdown:hover)
    .mb_header_prime_link:after {
    position: absolute;
    display: inline-block;
    content: "";
    width: 20px;
    height: 20px;
    display: inline-block;
    -webkit-mask: url(${mb}) no-repeat 50% 50%;
    mask: url(${mb}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background-color: #d8232a;
    top: 14px;
    right: 10px;
  }
`;
function Mb_Prime() {
  return (
    <Container>
      <div className="mb_prime_head">
        <a href="a" className="mb_header_prime_link">
          MB Prime
        </a>
        <div className="mb_header__main__prime_dropdown">
          <div className="prime_banner">
            <div className="crown_img" alt=""></div>
            <h4 className="prime_banner_head1">Introducing MB Prime</h4>
            <h6 className="prime_banner_head2">
              One membership many exclusiuve privileges
            </h6>
          </div>
          <p className="tick">Handpicked Agent to assist you</p>
          <p className="tick">First access to owner properties</p>
          <p className="tick">Exclusive partner discounts</p>
        </div>
      </div>
    </Container>
  );
}

export default Mb_Prime;
