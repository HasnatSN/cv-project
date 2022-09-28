import React from "react";

function PreviewInfo() {
  return (
    <div className="preview-info">
      <div className="description">
        <h4>Decription</h4>
        <div contentEditable={true} suppressContentEditableWarning={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea
          veritatis id ex temporibus natus, nostrum similique libero, eos
          repellendus ratione quos. Magnam dolorem laborum, dicta exercitationem
          sunt dolores adipisci! Cumque iusto, unde accusamus ea placeat aliquid
          suscipit veniam nemo deleniti 
        </div>
      </div>
      <div className="experience">
        <h4>Experience</h4>
        <div>-</div>
      </div>
      <div className="education">
        <h4>Education</h4>
        <div>-</div>
      </div>
    </div>
  );
}

export default PreviewInfo;
