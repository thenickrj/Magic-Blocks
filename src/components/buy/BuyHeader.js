import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 5rem;

  .heading {
    font-weight: normal;
  }
  hr {
    color: #ffc72c;
    width: 50px;
    border: 1px solid #ffc72c;
    float: left;
    margin: -10px 0;
    height: 2px;
    background-color: #ffc72c;
  }
`;
function BuyHeader() {
  return (
    <Container>
      <h2 className="heading">Because you searched Bangalore</h2>
      <hr />
    </Container>
  );
}

export default BuyHeader;
