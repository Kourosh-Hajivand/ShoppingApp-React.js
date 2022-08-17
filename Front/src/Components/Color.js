import React from "react";
import "./Color.css";
function Color(props) {
  return (
    <button onClick={props.clicked} className="colorbtn">
      {props.children}
      <div className={"circel " + props.name}></div>
    </button>
  );
}

export default Color;
