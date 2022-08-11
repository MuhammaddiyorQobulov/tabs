import React, { Component } from "react";
import PlayZone from "./components/play-zone/play-zone";
import SelectIcon from "./components/select-icon/select-icon";

let icon = null;
class App extends Component {
  state = {
    step: null,
    values: new Array(9).fill(null),
    x: 0,
    o: 0,
    total: null,
  };
  compareCells = (a, b, c) => {
    const { values, x, o } = this.state;

    if (
      values[a - 1] === values[b - 1] &&
      values[a - 1] === values[c - 1] &&
      values[a - 1] !== null
    ) {
      if (values[a - 1] === true) {
        this.setState({ x: x + 1, total: true });
        setTimeout(() => {
          alert("X-player Win !!! ");
        }, 0);
        return;
      } else if (values[a - 1] === false) {
        this.setState({ o: o + 1, total: true });
        setTimeout(() => {
          alert("O-player Win !!! ");
        }, 0);
        return;
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
  };

  handleSelect = (a, id) => {
    const { values } = this.state;
    values[id] = !a;
    this.setState(this.state);
    this.setState({ step: a });
    this.findWinner();
  };
  selectIcon = (value) => {
    this.setState({ step: value, values: new Array(9).fill(null) });
  };

  handleRestart = () => {
    this.setState({
      values: new Array(9).fill(null),
      step: icon,
      total: null,
      x: 0,
      o: 0,
    });
  };

  render() {
    const { values, step, total } = this.state;
    let { x, o } = this.state;
    const { handleSelect, selectIcon, handleRestart } = this;
    setTimeout(() => {
      !values.includes(null) && alert("Tugadi");
    }, 0);

    return (
      <div className="app">
        {step === null ? (
          <SelectIcon selectIcon={selectIcon} />
        ) : (
          <PlayZone
            x={x}
            o={o}
            onSelect={handleSelect}
            selectIcon={selectIcon}
            values={values}
            step={step}
            onRestart={handleRestart}
            disabled={total}
          />
        )}
      </div>
    );
  }
}

export default App;
