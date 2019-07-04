import React from "react";
import "./clearButton.css";

const ClearButton = props => {
  return (
    <div className="clearBtn" onClick={props.handleClear}>
      Clear
    </div>
  );
};

export default ClearButton;
