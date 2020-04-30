import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export class VizAppBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar></Toolbar>
        </AppBar>
      </div>
    );
  }
}
