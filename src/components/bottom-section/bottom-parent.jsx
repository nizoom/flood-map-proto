import React from "react";
import "../css/bottom-section.css";

const BottomSectionParent = () => {
  return (
    <section>
      <div className="tabs-section">
        <span className="tab" id="tab-1">
          Flood Zones
        </span>
        <span className="tab" id="tab-2">
          {" "}
          Flood Map Status
        </span>
      </div>
      <div className="tab-1">
        <h3>
          {" "}
          MORE AND MORE PROPERTIES ARE BEING FLOODED-EVEN IN AREAS FEMA
          CONSIDERES LESS RISKY
        </h3>
        <div className="articles-wrapper">
          <article className="left-side-article">
            <p>
              FEMA's flood insurance maps divide land into zones according to
              the level of flood risk.
            </p>
            {/* ASSET GOES HERE */}
          </article>
          <article className="right-side-article">
            <h2>
              {" "}
              In the United States, 21% of SRLPS are outside FEMA-designated
              flood zones{" "}
            </h2>
            <p>
              FEMA considers A and V zones to be particularly higher risk.
              Properties in B, C, and X zones are considered to have lower risk
              because they are outside the 1% annual chance (or 100-year)
              floodplain.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BottomSectionParent;
