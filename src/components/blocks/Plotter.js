import React, { Component } from "react";
require("d3");

const functionPlot = require("function-plot");

class Plotter extends Component {
  componentDidMount() {
    const { config, id } = this.props;
    const boundConfig = { ...config, target: `#${id}` };
    functionPlot(boundConfig);
  }
  render() {
    const { id, children, config } = this.props;
    return (
      <div id={id} data-component="Plotter" config={JSON.stringify(config)}>
        {children}
      </div>
    );
  }
}

export default Plotter;
