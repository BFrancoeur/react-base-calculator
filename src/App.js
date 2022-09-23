import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="display">
        <h2>Output</h2>
      </div>
      <div className="keypad grid">
        <div className="spcl-ops btn" value="clear">
          AC
        </div>
        <div className="spcl-ops btn" value="plus-minus">
          +/-
        </div>
        <div className="spcl-ops btn" value="percent">
          %
        </div>
        <div className="base-ops btn" value="divide">
          &divide;
        </div>
        <div className="num btn" value="7">
          7
        </div>
        <div className="num btn" value="8">
          8
        </div>
        <div className="num btn" value="9">
          9
        </div>
        <div className="base-ops btn" value="">
          &times;
        </div>
        <div className="num btn" value="4">
          4
        </div>
        <div className="num btn" value="5">
          5
        </div>
        <div className="num btn" value="6">
          6
        </div>
        <div className="base-ops btn" value="minus">
          &minus;
        </div>
        <div className="num btn" value="1">
          1
        </div>
        <div className="num btn" value="2">
          2
        </div>
        <div className="num btn" value="3">
          3
        </div>
        <div className="base-ops btn" value="plus">
          &#43;
        </div>
        <div className="num zero btn" value="0">
          0
        </div>
        <div className="num btn" value="decimal">
          .
        </div>
        <div className="num btn hidden" value="no-funct">
          {" "}
        </div>
        <div className="base-ops btn" value="equals">
          &#61;
        </div>
      </div>
    </div>
  );
}

export default App;
