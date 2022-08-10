import React, { Component } from "react";
import PlayZone from "./components/play-zone/play-zone";
import SelectIcon from "./components/select-icon/select-icon";

let total = 0;
let icon = null;
class App extends Component {
  state = {
    step: null,
    values: new Array(9).fill(null),
    x: 0,
    o: 0,
  };
  compareCells = (a, b, c) => {
    const { values } = this.state;

    if (
      values[a - 1] === values[b - 1] &&
      values[a - 1] === values[c - 1] &&
      values[a - 1] !== null
    ) {
      if (values[a - 1] === true) {
        total = true;
      } else if (values[a - 1] === false) {
        total = false;
      }
    }
  };

  findWinner = () => {
    this.compareCells(1, 2, 3) ||
      this.compareCells(4, 5, 6) ||
      this.compareCells(7, 8, 9) ||
      this.compareCells(1, 4, 7) ||
      this.compareCells(2, 5, 8) ||
      this.compareCells(3, 6, 9) ||
      this.compareCells(1, 5, 9) ||
      this.compareCells(3, 5, 7);

    return total;
  };

  handleSelect = (a, id) => {
    const { values } = this.state;
    values[id] = !a;
    this.setState(this.state);
    this.setState({ step: a });
  };
  selectIcon = (value) => {
    this.setState({ step: value });
    icon = value;
  };

  handleRestart = () => {
    this.setState({ values: new Array(9).fill(null), step: icon });
  };

  render() {
    const { values, step } = this.state;
    let { x, o } = this.state;
    const { handleSelect, selectIcon, findWinner, handleRestart } = this;
    setTimeout(() => {
      !values.includes(null) && alert("Tugadi");
    }, 0);

    console.log(findWinner());
    return (
      <div
        className="app" // style={{"--disabled": values.includes(false) && "none",}}
      >
        {step === null ? (
          <SelectIcon selectIcon={selectIcon} />
        ) : (
          <PlayZone
            x={x}
            o={o}
            onSelect={handleSelect}
            values={values}
            step={step}
            onRestart={handleRestart}
          />
        )}
      </div>
    );
  }
}

export default App;
