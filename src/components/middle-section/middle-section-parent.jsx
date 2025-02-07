import React from "react";
import GraphComponent from "./graph";
import MapSection from "./map";
import "../css/middle-section.css";
import StateDropdown from "./states";

const MiddleSectionParent = () => {
  return (
    <section className="middle-section-parent">
      <div className="left-panel-wrapper" id="panel">
        <span className="middle-caption">
          <span>
            Efforts to reduce flood risk or "mitigation" are falling behind{" "}
          </span>
          climate change and risky new development, so the number of SRLPs{" "}
          <span>keep rising. </span>
        </span>

        <StateDropdown />
        <GraphComponent />
      </div>
      <div className="right-panel-wrapper" id="panel">
        {/* MAPP ASSET GOES HERE */}
        <MapSection />
      </div>
    </section>
  );
};

export default MiddleSectionParent;
