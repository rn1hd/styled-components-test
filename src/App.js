import React from "react";
import styled from "styled-components";

import { Card } from "./card.component";

import "./App.css";

const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${({ isActive }) =>
    isActive ? "1px solid black" : "3px dotted green"};
`;

function App() {
  return (
    <div className="App">
      <Card>
        <Text isActive={false}>I am a component</Text>
      </Card>
    </div>
  );
}

export default App;
