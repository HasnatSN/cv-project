import React from "react";

function PreviewHeader() {
  return (
    <div className="preview-header">
      <h2 contentEditable={true} suppressContentEditableWarning={true}>
        Maximilian Mustermann
      </h2>
      <h4 contentEditable={true} suppressContentEditableWarning={true}>
        Full Stack Web Developer
      </h4>
    </div>
  );
}

export default PreviewHeader;
