import React from "react";
import { LangstonsAnt } from "../viz";
import { VizAppBar } from "../layout";
import { VizButton } from "../components";

export class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisualizing: false,
      currGrid: [30, 30],
    };
    this.handleVisualize = this.handleVisualize.bind(this);
  }

  handleVisualize = () => {
    this.setState({
      isVisualizing: !this.state.isVisualizing,
    });
  };

  handleGridSize = (size) => {
    this.setState({
      currGrid: size,
    });
  };

  render() {
    return (
      <div className="App">
        <VizAppBar
          handleSize={this.handleGridSize}
          visualizing={this.state.isVisualizing}
          handleViz={this.handleVisualize}
        />
        <LangstonsAnt
          visualizing={this.state.isVisualizing}
          handleViz={this.handleVisualize}
          gridSize={this.state.currGrid}
        />
      </div>
    );
  }
}
