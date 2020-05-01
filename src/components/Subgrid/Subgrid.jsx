import * as React from "react";

export class Subgrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: "white",
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip() {
    const { x, y, currGrid } = this.props;
    if (x === currGrid[0] && y === currGrid[1]) {
      this.props.direction(this.state.fill);
      this.setState({
        fill: this.state.fill === "white" ? "black" : "white",
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currGrid !== prevProps.currGrid) {
      this.handleFlip();
    }
  }

  render() {
    const { x, y } = this.props;

    return (
      <rect
        x={x * 15}
        y={y * 15}
        width={15}
        height={15}
        fill={this.state.fill}
        stroke={"black"}
        strokeWidth={1}
        strokeOpacity={0.3}
      ></rect>
    );
  }
}
