import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.css";

function Layout(props) {
  return (
    <Aux>
      <div>ToolBar, SideDrawer, BackDrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
