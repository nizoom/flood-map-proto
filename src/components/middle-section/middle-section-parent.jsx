import React from "react";
import GraphComponent from "./graph";
import MapSection from "./map";
import "../css/middle-section.css";

const MiddleSectionParent = () => {
  return (
    <section className="middle-section-parent">
      <div className="left-panel-wrapper" id="panel">
        <h3>
          Efforts to reduce flood risk or "mitigation" are falling behind
          climate change and risky new development, so the number of SRLPs keep
          rising.
        </h3>
        <GraphComponent />
      </div>
      <div className="right-panel-wrapper" id="panel">
        {/* MAPP ASSET GOES HERE */}
        MAP GOES HERE
      </div>
    </section>
  );
};

export default MiddleSectionParent;
