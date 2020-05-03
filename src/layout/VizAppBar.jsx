import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { VizButton } from "../components";

const styles = {
  root: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  field: {
    maxWidth: 50,
    marginRight: "10px",
  },
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleWidth = this.handleWidth.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
  }

  handleWidth = (e) => {
    const val = e.target.value;
    this.props.handleWidth(val);
  };

  handleHeight = (e) => {
    const val = e.target.value;
    this.props.handleHeight(val);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography align=''>Grid Size</Typography>
                  <TextField
                    id="standard-basic"
                    label="Width"
                    type="number"
                    defaultValue={30}
                    onChange={this.handleWidth}
                    className={classes.field}
                  />
                  <TextField
                    id="standard-basic"
                    label="Height"
                    type="number"
                    defaultValue={30}
                    onChange={this.handleHeight}
                    className={classes.field}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
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

export const VizAppBar = withStyles(styles)(Component);
