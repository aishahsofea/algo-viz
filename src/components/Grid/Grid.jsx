import * as React from "react";
import { Subgrid } from "../Subgrid";

export class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.renderSubgrids = this.renderSubgrids.bind(this);
  }

  renderSubgrids(height, width) {
    const position = { x: [], y: [] };
    for (let h = 0; h < height; h++) {
      for (let w = 0; w < width; w++) {
        position.x.push(w);
        position.y.push(h);
      }
    }

    const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);
    const zippedPosition = zip(position.x, position.y);
    const subgrids = zippedPosition.map((pos, ind) => (
      <Subgrid
        x={pos[0]}
        y={pos[1]}
        currGrid={this.props.currGrid}
        direction={this.props.direction}
      />
    ));

    return subgrids;
  }

  render() {
    const { height, width } = this.props;
    return (
      <div {...this.props}>
        <svg
          height={height * 15}
          width={width * 15}
          xmlns="http://www.w3.org/2000/svg"
        >
          {this.renderSubgrids(height, width)}
        </svg>
      </div>
    );
  }
}
