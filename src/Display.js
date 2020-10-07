import React from "react";

function Display(props) {
  // const mithun = new Date().toLocaleTimeString();

  return (
    <>
      <div style={{ backgroundColor: "GrayText" }}>{props.name}</div>
      <div>{props.data}</div>
    </>
  );
}

export default Display;
