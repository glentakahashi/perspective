import { hot } from "react-hot-loader/root";
import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 2rem;
`;

const App: React.SFC = () => {
  return <Title>Hello World!</Title>;
};

export default hot(App);
