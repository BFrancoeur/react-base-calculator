import Container from "./components/Container.component";
import Output from "./components/Output.component";
import Keypad from "./components/Keypad.component";
import Button from "./components/Button.component";

import "./App.css";

const buttons = [
  "AC",
  "+/-",
  "%",
  "&divide;",
  7,
  8,
  9,
  "&times;",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "&#43;",
  0,
  ".",
  "=",
];

const App = () => {
  return (
    <Container>
      <Output />
      <Keypad>
        {buttons.map((button, i) => (
          <Button key={i} value={button} />
        ))}
        ;
      </Keypad>
    </Container>
  );
};

export default App;
