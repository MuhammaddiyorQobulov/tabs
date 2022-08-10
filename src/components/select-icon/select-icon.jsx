import "./select-icon.scss";
import { xIcon, oIcon } from "../play-zone/cell/cell";

const SelectIcon = ({ selectIcon }) => {
  return (
    <div className="select-icon">
      <h1>Select Your Icon</h1>
      <div className="icons">
        <span onClick={() => selectIcon(true)} className="x">
          {xIcon}
        </span>
        <span onClick={() => selectIcon(false)} className="o">
          {oIcon}
        </span>
      </div>
    </div>
  );
};

export default SelectIcon;
