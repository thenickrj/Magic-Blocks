import React from "react";
import styled from "styled-components";

let Container = styled.div`
  text-align: center;
  object-fit: contain;
  margin: auto;
  background: #fff;
  border-radius: 20px;
  padding: 5px;

  .free_text {
    font-size: 14px;
    padding: 2px 10px;
    background: #ffc72c;
    border-radius: 13px;
    margin: 10px 5px;
  }
`;
function PostProperty() {
  return (
    <Container>
      Post Property <span className="free_text">Free</span>
    </Container>
  );
}

export default PostProperty;
