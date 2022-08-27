import React from "react";
import Test from "./components/test";
import Clock from "./images/clock.jpg";
import styled from "styled-components";
import Container from "@mui/material/Container";
const Cc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${Clock});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const App = () => {
  return (
    <Cc>
      <Container maxWidth="sm">
        <Test></Test>
      </Container>
    </Cc>
  );
};

export default App;
