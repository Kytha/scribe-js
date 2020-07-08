import detectIndent from "detect-indent";
import Draft from "draft-js";
var DEFAULT_INDENTATION = "    ";

/**
 * Detect indentation in a text
 * @param {String} text
 * @return {String}
 */
function getIndentation(text) {
  var result = detectIndent(text);
  return result.indent || DEFAULT_INDENTATION;
}

export function onTab(e, editorState) {
  var contentState = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var startKey = selection.getStartKey();
  var currentBlock = contentState.getBlockForKey(startKey);

  var indentation = getIndentation(currentBlock.getText());
  var newContentState;

  if (selection.isCollapsed()) {
    newContentState = Draft.Modifier.insertText(
      contentState,
      selection,
      indentation
    );
  } else {
    newContentState = Draft.Modifier.replaceText(
      contentState,
      selection,
      indentation
    );
  }

  return Draft.EditorState.push(
    editorState,
    newContentState,
    "insert-characters"
  );
}
