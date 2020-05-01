import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import { VizButton } from "../components";

export class VizAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleGridSize = this.handleGridSize.bind(this);
  }

  handleGridSize = (e) => {
    const val = e.target.value;
    this.props.handleSize([val, val]);
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <TextField
              id="standard-basic"
              label="Size"
              type="number"
              defaultValue={30}
              onChange={this.handleGridSize}
            />
            <VizButton
              visualizing={this.props.visualizing}
              handleViz={this.props.handleViz}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
