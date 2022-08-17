import React from "react";

import portrait from "C:/Users/Admin/Documents/Coding/Web Development/The Odin Project/repos/cv-project/src/assets/portrait.jpg";

function PersonalInfo() {
  return (
    <div className="sidebar">
      <img src={portrait} alt="portrait" />
      <h4>Contact Infos</h4>
      <div>
        <h5>Address</h5>
        <div>Example Street 19</div>
      </div>

      <div>
        <h5>Phone Number</h5>
        <div>0809 73 02 38 19</div>
      </div>

      <div>
        <h5>Email:</h5>
        <div>spaghetti-lover@gmail.com</div>
      </div>
    </div>
  );
}

export default PersonalInfo;
