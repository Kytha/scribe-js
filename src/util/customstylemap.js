import { Inline } from "./constants";

/*
Custom style map for custom entities like Hihglight.
*/
const customStyleMap = {
  [Inline.HIGHLIGHT]: {
    backgroundColor: "yellow",
  },
  [Inline.CODE]: {
    fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    margin: "4px 0",
    fontSize: "0.9em",
    padding: "1px 3px",
    color: "#575581",
    backgroundColor: "#F2F2F2",
    border: "1px solid #ccc",
    borderBottomColor: "#bbb",
    borderRadius: 3,
    overflowWrap: "break-word",
    boxShadow: "inset 0 -1px 0 #bbb",
  },
  [Inline.EQUATION]: {
    padding: "2px 4px",
    fontSize: "0.7em",
    border: "1px dashed #ccc",
    borderRadius: 3,
  },
};

export default customStyleMap;
