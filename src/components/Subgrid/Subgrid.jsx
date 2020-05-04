import * as React from "react";

export class Subgrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: "white",
    };
    this.handleFlip = this.handleFlip.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderAnt = this.renderAnt.bind(this);
  }

  handleFlip() {
    const { x, y, currGrid } = this.props;
    if (x === currGrid[0] && y === currGrid[1]) {
      this.props.direction(this.state.fill);
      this.setState({
        fill: this.state.fill === "white" ? "green" : "white",
      });
    }
  }

  handleClick = () => {
    const { x, y } = this.props;
    this.props.handleAnt([x, y]);
  };

  renderAnt() {
    const { x, y } = this.props;
    return (
      <image
        xlinkHref="https://image.flaticon.com/icons/svg/47/47288.svg"
        x={x * 15}
        y={y * 15}
        height={15}
        width={15}
        preserveAspectRatio="xMidYMid meet"
      />
    );
  }

  componentDidUpdate(prevProps) {
    const { visualizing } = this.props;
    if (visualizing && this.props.currGrid !== prevProps.currGrid) {
      this.handleFlip();
    }
  }

  render() {
    const { x, y, currGrid } = this.props;

    return (
      <React.Fragment>
        <rect
          x={x * 15}
          y={y * 15}
          width={15}
          height={15}
          fill={this.state.fill}
          stroke={"black"}
          strokeWidth={1}
          strokeOpacity={0.3}
          onClick={this.handleClick}
        />
        {currGrid && currGrid[0] === x && currGrid[1] === y
          ? this.renderAnt()
          : null}
      </React.Fragment>
    );
  }
}
