import React from "react";
import { LangstonsAnt } from "../viz";
import { VizAppBar } from "../layout";

export class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisualizing: false,
      clickCount: 0,
      gridWidth: 30,
      gridHeight: 30,
    };
    this.handleVisualize = this.handleVisualize.bind(this);
  }

  handleVisualize = () => {
    this.setState({
      isVisualizing: !this.state.isVisualizing,
      clickCount: this.state.clickCount + 1,
    });
  };

  handleWidth = (val) => {
    this.setState({
      gridWidth: val,
    });
  };

  handleHeight = (val) => {
    this.setState({
      gridHeight: val,
    });
  };

  render() {
    const { gridWidth, gridHeight } = this.state;
    return (
      <div className="App">
        <VizAppBar
          handleSize={this.handleGridSize}
          handleWidth={this.handleWidth}
          handleHeight={this.handleHeight}
          visualizing={this.state.isVisualizing}
          handleViz={this.handleVisualize}
        />
        <LangstonsAnt
          visualizing={this.state.isVisualizing}
          clickCount={this.state.clickCount}
          handleViz={this.handleVisualize}
          gridSize={[gridWidth, gridHeight]}
        />
      </div>
    );
  }
}
