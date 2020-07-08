import PropTypes from "prop-types";
import React from "react";
import Plotter from "./Plotter";
import { EditorBlock, EditorState, SelectionState } from "draft-js";
import Immutable from "immutable";

import { getCurrentBlock } from "../../model/";

class GraphBlock extends React.Component {
  static propTypes = {
    block: PropTypes.object,
    blockProps: PropTypes.object,
  };

  focusBlock = () => {
    const { block, blockProps } = this.props;
    const { getEditorState, setEditorState } = blockProps;
    const key = block.getKey();
    const editorState = getEditorState();
    const currentblock = getCurrentBlock(editorState);
    if (currentblock.getKey() === key) {
      return;
    }
    const newSelection = new SelectionState({
      anchorKey: key,
      focusKey: key,
      anchorOffset: 0,
      focusOffset: 0,
    });
    setEditorState(EditorState.forceSelection(editorState, newSelection));
  };

  render() {
    const { blockProps, block } = this.props;

    const data = block.getData();
    const id = data.get("id");
    const configMap = data.get("config");
    const config =
      typeof configMap === "string" ? JSON.parse(configMap) : configMap.toJS();

    const showPlaceholder = block.getLength() === 0 && blockProps.placeholder;
    const extraProps = {};
    if (config !== null) {
      if (showPlaceholder) {
        extraProps["data-placeholder"] = blockProps.placeholder;
        extraProps.className = "md-block-graph-caption--empty";
      }
    }

    if (config !== null) {
      return (
        <div>
          <div
            className="md-block-graph-inner-container"
            onClick={this.focusBlock}
          >
            <Plotter config={config} id={id}></Plotter>
          </div>
          <figcaption {...extraProps}>
            <EditorBlock {...this.props} />
          </figcaption>
        </div>
      );
    }
    return <EditorBlock {...this.props} />;
  }
}

export default GraphBlock;
