import React from "react";
import mb from "../../images/angle-small-down.svg";
import styled from "styled-components";

var Container = styled.div`
  .mb_prime_head {
  }
  .mb_header_login_link {
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
  .mb_header_login_link:after {
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
  .mb_header_login_link:hover {
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
  .mb_header_login_link:hover:after {
    background-color: #d8232a;
  }
  .mb_header__main__login_dropdown {
    color: #000;
    display: none;
    min-width: 200px;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    z-index: 3;
    margin-top: -0.4rem;
    position: absolute;
    padding: 5px 20px;
    border-radius: 0 8px 8px 8px;
    box-shadow: 0 3px 9px 0 rgb(48 48 48 / 20%);
  }
  .mb_prime_head:hover .mb_header__main__login_dropdown {
    display: block;
  }
  .nav_login_notbold {
    display: inline-block;
    background-color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    color: #606060;
    padding-right: 12px;
    left: 0;
    top: 0;
  }
  .nav_login_bold {
    display: block;
    font-size: 16px;
    line-height: 16px;
    color: #303030;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .login_divider {
    height: 24px;
    position: relative;
  }
  .login_divider:before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e8e8e8;
    position: absolute;
    top: 24px;
    left: 0;
  }
  .profile_login {
    padding: 5px 0;
  }
  .login_button {
    background-color: #d8232a;
    border: none;
    font-size: 16px;
    color: #fff;
    padding: 10px;
    width: 10rem;
    border-radius: 10px;
  }
  .mb_prime_head:has(> .mb_header__main__login_dropdown:hover)
    .mb_header_login_link {
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

  .mb_prime_head:has(> .mb_header__main__login_dropdown:hover)
    .mb_header_login_link:after {
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

function LoginNav() {
  return (
    <Container>
      <div className="mb_prime_head">
        <a href="a" className="mb_header_login_link">
          Login
        </a>
        <div className="mb_header__main__login_dropdown">
          <div className="login_divider">
            <p className="nav_login_notbold pos-abs">My Activity</p>
          </div>

          <p className="nav_login_bold">Contacted Properties</p>
          <p className="nav_login_bold">Viewed Properties</p>
          <p className="nav_login_bold">Shortlisted Properties</p>
          <p className="nav_login_bold">Search</p>

          <div class="profile_login">
            <p className="nav_login_bold">Recommendations</p>
            <p className="nav_login_bold">My Profile</p>
          </div>
          <div>
            <button className="login_button">Login</button>
          </div>
          <div className="login_divider"></div>
          <p className="nav_login_notbold">New to Magibblocks? Sign up</p>
        </div>
      </div>
    </Container>
  );
}

export default LoginNav;
