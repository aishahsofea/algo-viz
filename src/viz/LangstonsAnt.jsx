import * as React from "react";
import { Grid } from "../components";

export class LangstonsAnt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: [450, 450],
      currGrid: [270, 240],
      direction: "north",
    };
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleDirection = this.handleDirection.bind(this);
    this.handleBoundaries = this.handleBoundaries.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.timeOut = 0;
  }

  handleNextStep = () => {
    const direction = this.state.direction;
    const x = this.state.currGrid[0];
    const y = this.state.currGrid[1];
    let forward;
    switch (direction) {
      case "north":
        forward = [x, y - 15];
        break;
      case "east":
        forward = [x + 15, y];
        break;
      case "south":
        forward = [x, y + 15];
        break;
      case "west":
        forward = [x - 15, y];
        break;
      default:
    }
    return forward;
  };

  handleDirection = (color) => {
    const direction = this.state.direction;
    switch (direction) {
      case "north":
        this.setState({
          direction: color === "white" ? "east" : "west",
        });
        break;
      case "east":
        this.setState({
          direction: color === "white" ? "south" : "north",
        });
        break;
      case "south":
        this.setState({
          direction: color === "white" ? "west" : "east",
        });
        break;
      case "west":
        this.setState({
          direction: color === "white" ? "north" : "south",
        });
        break;
      default:
    }
  };

  handleBoundaries = (currGrid) => {
    const { gridSize } = this.state;
    const x = currGrid[0];
    const y = currGrid[1];

    if (x >= gridSize[0] || x < 0) {
      return false;
    }

    if (y >= gridSize[1] || y < 0) {
      return false;
    }

    return true;
  };

  handleMove = () => {
    if (this.handleBoundaries(this.handleNextStep())) {
      this.setState({
        currGrid: this.handleNextStep(),
      });
    } else {
      this.props.handleViz();
    }
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.visualizing !== prevProps.visualizing) {
      if (this.props.visualizing) {
        this.timeOut = setInterval(this.handleMove, 1);
      } else {
        clearInterval(this.timeOut);
      }
    }
  };

  render() {
    const height = this.state.gridSize[0];
    const width = this.state.gridSize[1];
    return (
      <div>
        <Grid
          height={height}
          width={width}
          currGrid={this.state.currGrid}
          direction={this.handleDirection}
        />
      </div>
    );
  }
}
