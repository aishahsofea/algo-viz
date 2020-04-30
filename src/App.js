import React from "react";
import { LangstonsAnt } from "./viz";
import { VizAppBar } from "./layout";
import { VizButton } from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisualizing: false,
    };
    this.handleVisualize = this.handleVisualize.bind(this);
  }

  handleVisualize = () => {
    this.setState({
      isVisualizing: !this.state.isVisualizing,
    });
  };

  render() {
    return (
      <div className="App">
        <VizAppBar />
        <VizButton
          visualizing={this.state.isVisualizing}
          handleViz={this.handleVisualize}
        />
        <LangstonsAnt
          visualizing={this.state.isVisualizing}
          handleViz={this.handleVisualize}
        />
      </div>
    );
  }
}

export default App;
