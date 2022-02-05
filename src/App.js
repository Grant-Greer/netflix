import React from "react";
import JumboData from "./fixtures/jumbo";
import Jumbotron from "./components/jumbotron";

export default function App() {
  return (
    <Jumbotron.Container>
      {JumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <p>Hello</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
