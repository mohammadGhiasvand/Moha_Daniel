import React from "react";

import Aux from "../../../hoc/Auxiliary";

import classes from "./Modal.css";

import Backdrop from "../Backdrop/Backdrop";

function Modal(props) {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          visibility: props.show ? "visible" : "hidden",
          opacity: props.show ? "1" : "0",
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
}

export default Modal;
