import React, { useState } from "react";
import "./cell.scss";
const Cell = ({ value, id, step, onSelect }) => {
  const [state, setState] = useState(null);

  setTimeout(() => {
    value == null && setState(null);
  }, 0);

  const handleValue = () => {
    setState(step ? xIcon : oIcon);
  };

  return (
    <div
      className="cell"
      onClick={() => {
        handleValue();
        onSelect(!step, id);
      }}
      style={{
        pointerEvents: state && "none",
      }}
    >
      <span>{state}</span>
    </div>
  );
};

export default Cell;

export const xIcon = (
  <svg
    className="x-icon"
    width="60"
    height="60"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
  >
    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
  </svg>
);

export const oIcon = (
  <svg
    className="o-icon"
    width="60"
    height="60"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="blue"
  >
    <path d="M224 32.01c-123.5 0-224 100.5-224 224s100.5 224 224 224s224-100.5 224-224S347.5 32.01 224 32.01zM224 416c-88.22 0-160-71.78-160-160s71.78-159.1 160-159.1s160 71.78 160 159.1S312.2 416 224 416z" />
  </svg>
);
