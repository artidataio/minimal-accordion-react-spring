import React from "react";
import Accordion from "./Accordion";
export default function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>{open ? "hide" : "show"}</button>
      <Accordion open={open}>
        <div style={{ backgroundColor: "black" }}>
          <h1 style={{ color: "white" }}>Hello CodeSandbox</h1>
          <h2 style={{ color: "white" }}>
            Start editing to see some magic happen!
          </h2>
        </div>
      </Accordion>
      <p>Spacer</p>
    </>
  );
}
