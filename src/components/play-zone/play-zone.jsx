import React, { Component } from "react";
import Cell from "./cell/cell";
import { oIcon, xIcon } from "./cell/cell";

import "./play-zone.scss";

class PlayZone extends Component {
  render() {
    const { values, step, onSelect, x, o, onRestart, disabled, selectIcon } =
      this.props;

    return (
      <>
        <div className="play-zone">
          {values.map((value, idx) => (
            <Cell
              key={idx}
              id={idx}
              onSelect={onSelect}
              value={value}
              step={step}
              disabled={disabled}
            />
          ))}
        </div>

        <div className="totalShot">
          <table>
            <thead>
              <tr>
                <th style={step === true ? { backgroundColor: "#efed40" } : {}}>
                  {xIcon}
                </th>
                <th
                  style={step === false ? { backgroundColor: "#efed40" } : {}}
                >
                  {oIcon}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{x}</td>
                <td>{o}</td>
              </tr>
            </tbody>
          </table>
          <button
            style={
              !values.includes(null)
                ? {
                    background: "red",
                  }
                : {}
            }
            className="restart-btn"
            onClick={() => onRestart()}
          >
            Restart
          </button>
          <button className="restart-btn" onClick={() => selectIcon(null)}>
            Select Icon
          </button>
        </div>
      </>
    );
  }
}

export default PlayZone;
