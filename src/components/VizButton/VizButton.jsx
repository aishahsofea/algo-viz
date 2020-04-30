import * as React from "react";
import Button from "@material-ui/core/Button";

export class VizButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label ? "stop" : "visualize",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.handleViz();
  };

  render() {
    return (
      <Button
        variant="contained"
        onClick={this.handleClick}
        color={this.state.color}
      >
        {this.props.visualizing ? "stop" : "visualize"}
      </Button>
    );
  }
}
