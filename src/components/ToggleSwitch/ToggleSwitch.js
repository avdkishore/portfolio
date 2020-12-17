import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";
const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);
  const styleContext = useContext(StyleContext);

  return (
    <div className="wrapper">
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            styleContext.changeTheme();
            setChecked(!isChecked);
          }}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
export default ToggleSwitch;
