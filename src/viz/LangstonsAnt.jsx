import * as React from "react";
import { Grid } from "../components";

export class LangstonsAnt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currGrid: null,
      direction: "north",
    };
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handleDirection = this.handleDirection.bind(this);
    this.handleBoundaries = this.handleBoundaries.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleCurrGrid = this.handleCurrGrid.bind(this);
    this.timeOut = 0;
  }

  handleNextStep = () => {
    const direction = this.state.direction;
    const x = this.state.currGrid[0];
    const y = this.state.currGrid[1];
    let forward;
    switch (direction) {
      case "north":
        forward = [x, y - 1];
        break;
      case "east":
        forward = [x + 1, y];
        break;
      case "south":
        forward = [x, y + 1];
        break;
      case "west":
        forward = [x - 1, y];
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
    const { gridSize } = this.props;
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
    const nextStep = this.handleNextStep();
    if (this.handleBoundaries(nextStep)) {
      this.setState({
        currGrid: nextStep,
      });
    } else {
      this.props.handleViz();
    }
  };

  handleCurrGrid = (location) => {
    this.setState({
      currGrid: location,
    });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.visualizing !== prevProps.visualizing) {
      if (this.props.visualizing) {
        this.timeOut = setInterval(this.handleMove, 10);
      } else {
        clearInterval(this.timeOut);
      }
    }
  };

  render() {
    const { gridSize, visualizing, clickCount } = this.props;
    const width = gridSize[0];
    const height = gridSize[1];
    return (
      <React.Fragment>
        {"Click on the grid to place the ant"}
        <Grid
          width={width}
          height={height}
          currGrid={this.state.currGrid}
          direction={this.handleDirection}
          handleCurrGrid={this.handleCurrGrid}
          visualizing={visualizing}
          clickCount={clickCount}
        />
      </React.Fragment>
    );
  }
}
