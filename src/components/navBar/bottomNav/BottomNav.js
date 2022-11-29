import React from "react";
import styled from "styled-components";
import Buy from "./Buy";
import Help from "./Help";
import HomeLoans from "./HomeLoans";
import MB_Advice from "./MB_Adivce";
import PropertyServices from "./PropertyServices";
import Rent from "./Rent";
import Sell from "./Sell";

var Container = styled.div`
  .mb_header_sec {
    height: 40px;
    border-bottom: 1px solid black;
  }

  .mb_header_sec_container {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    padding: 8px;
  }
`;

function BottomNav() {
  return (
    <Container>
      <section className="mb_header_sec">
        <div className="mb_header_sec_container">
          <Buy />
          <Rent />
          <Sell />
          <HomeLoans />
          <PropertyServices />
          <MB_Advice />
          <Help />
        </div>
      </section>
    </Container>
  );
}

export default BottomNav;
