import React from "react";
import WorkingOnIt from "../resources/images/working-on-it.png";

function UnderDevelopment() {
  document.title = "FSC - Under Development";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={WorkingOnIt} alt="Page Under Construction"></img>
    </div>
  );
}

export default UnderDevelopment;
