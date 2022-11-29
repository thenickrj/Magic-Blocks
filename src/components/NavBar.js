import React from "react";
import BottomNav from "./navBar/bottomNav/BottomNav";
import CitiesNav from "./navBar/CitiesNav";
import LoginNav from "./navBar/LoginNav";
import Mb_Prime from "./navBar/Mb_Prime";
import PostProperty from "./navBar/PostProperty";

function NavBar() {
  return (
    <nav>
      <section className="mb_header_main">
        <div className="mb_container mb_header_main_section">
          <div className="mb_header__main__left">
            <div className="mb_header__main__logo">
              <a
                href="https://www.magicbricks.com/"
                className="mb_header_main_logo"
              ></a>
            </div>
            <CitiesNav />
            {/* <div class="test">d</div> */}
          </div>
          <div className="mb_header__main__right">
            <Mb_Prime />
            <LoginNav />
            <PostProperty />
            {/* <div class="test">d</div> */}
          </div>
        </div>
      </section>
      <BottomNav />
    </nav>
  );
}

export default NavBar;
