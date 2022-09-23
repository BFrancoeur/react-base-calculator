import React from "react";
import Container from "./components/Container.component";
import Output from "./components/Output.component";
import Keypad from "./components/Keypad.component";
// import Button from "./components/Button.component";

import "./App.css";

const App = () => {
  const buttons = [
    {
      id: "clear",
      type: "clear",
      value: "AC",
      cssClass: "spcl-ops btn",
    },
    {
      id: "plus-minus",
      type: "plus-minus",
      value: "+/-",
      cssClass: "spcl-ops btn",
    },
    {
      id: "percent",
      type: "percent",
      value: "%",
      cssClass: "spcl-ops btn",
    },
    {
      id: "divide",
      type: "divide",
      value: "÷",
      cssClass: "base-ops btn",
    },
    {
      id: "7",
      type: "number",
      value: 7,
      cssClass: "num btn",
    },
    {
      id: "8",
      type: "number",
      value: 8,
      cssClass: "num btn",
    },
    {
      id: "9",
      type: "number",
      value: 9,
      cssClass: "num btn",
    },
    {
      id: "mulitply",
      type: "multiply",
      value: "×",
      cssClass: "base-ops btn",
    },
    {
      id: "4",
      type: "number",
      value: 4,
      cssClass: "num btn",
    },
    {
      id: "5",
      type: "number",
      value: 5,
      cssClass: "num btn",
    },
    {
      id: "6",
      type: "number",
      value: 6,
      cssClass: "num btn",
    },
    {
      id: "minus",
      type: "minus",
      value: "-",
      cssClass: "base-ops btn",
    },
    {
      id: "1",
      type: "number",
      value: 1,
      cssClass: "num btn",
    },
    {
      id: "2",
      type: "number",
      value: 2,
      cssClass: "num btn",
    },
    {
      id: "3",
      type: "number",
      value: 3,
      cssClass: "num btn",
    },
    {
      id: "plus",
      type: "plus",
      value: "+",
      cssClass: "base-ops btn",
    },
    {
      id: "0",
      type: "number",
      value: 0,
      cssClass: "num btn",
    },
    {
      id: "decimal",
      type: "decimal",
      value: ".",
      cssClass: "num btn",
    },
    {
      id: "equals",
      type: "equals",
      value: "=",
      cssClass: "equals btn",
    },
  ];
  return (
    <Container>
      <Output />
      <Keypad>
        {buttons.map(({ cssClass, id, value }) => {
          return (
            <button key={id} className={cssClass}>
              {value}
            </button>
          );
        })}
      </Keypad>
    </Container>
  );
};

export default App;
