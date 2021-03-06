import QuoteCaptionBlock from "./blocks/blockquotecaption";
import CaptionBlock from "./blocks/caption";
import AtomicBlock from "./blocks/atomic";
import TodoBlock from "./blocks/todo";
import ImageBlock from "./blocks/image";
import GraphBlock from "./blocks/graph";
import BreakBlock from "./blocks/break";

import { Block } from "../util/constants";

export default (setEditorState, getEditorState, extraProps) => (
  contentBlock
) => {
  // console.log(editorState, onChange);
  const type = contentBlock.getType();
  switch (type) {
    case Block.BLOCKQUOTE_CAPTION:
      return {
        component: QuoteCaptionBlock,
      };
    case Block.CAPTION:
      return {
        component: CaptionBlock,
      };
    case Block.ATOMIC:
      return {
        component: AtomicBlock,
        editable: false,
        props: {
          getEditorState,
        },
      };
    case Block.TODO:
      return {
        component: TodoBlock,
        props: {
          setEditorState,
          getEditorState,
        },
      };
    case Block.GRAPH:
      return {
        component: GraphBlock,
        props: {
          setEditorState,
          getEditorState,
          placeholder: extraProps ? extraProps.graphCaptionPlaceholder : "",
        },
      };
    case Block.IMAGE:
      return {
        component: ImageBlock,
        props: {
          setEditorState,
          getEditorState,
          placeholder: extraProps ? extraProps.imageCaptionPlaceholder : "",
        },
      };
    case Block.BREAK:
      return {
        component: BreakBlock,
        editable: false,
      };
    default:
      return null;
  }
};
