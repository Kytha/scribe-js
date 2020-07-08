import PropTypes from "prop-types";
import React from "react";

import { addNewBlock } from "../../model";
import { Block } from "../../util/constants";
import idgen from "../../util/idgen";

export default class ImageButton extends React.Component {
  static propTypes = {
    setEditorState: PropTypes.func,
    getEditorState: PropTypes.func,
    close: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const configString = prompt(
      "Type or paste in JSON chart config object. For more information consult - https://mauriciopoppe.github.io/function-plot/",
      ""
    );
    if (!configString) return;
    const config = JSON.parse(configString);
    this.props.setEditorState(
      addNewBlock(this.props.getEditorState(), Block.GRAPH, {
        config: config,
        id: `graph-${idgen()}`,
      })
    );
    this.props.close();
  }

  /*
  This is an example of how an image button can be added
  on the side control. This Button handles the image addition locally
  by creating an object url. You can override this method to upload
  images to your server first, then get the image url in return and then
  add to the editor.
  */

  render() {
    return (
      <button
        className="md-sb-button md-sb-img-button"
        type="button"
        onClick={this.onClick}
        title="Add a graph"
      >
        <i className="fa fa-chart-area" />
      </button>
    );
  }
}
