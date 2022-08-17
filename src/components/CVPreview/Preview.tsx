import React from "react";
import PersonalInfo from "./PersonalInfo";
import PreviewHeader from "./PreviewHeader";
import PreviewInfo from "./PreviewInfo";

function Preview() {
  return (
    <div className="preview-div">
      <PreviewHeader />
      <PreviewInfo />
      <PersonalInfo />
    </div>
  );
}

export default Preview;
