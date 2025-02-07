import React from "react";
import "../css/bottom-section.css";
import bottomGraphic from "../../bottom-graphic.png";
import pieChart from "../../pie.png";
const BottomSectionParent = () => {
  return (
    <section>
      <div className="tabs-section">
        <div className="indent">
          <span className="tab" id="tab-1">
            Flood Zones
          </span>
          <span className="tab" id="tab-2">
            {" "}
            Flood Map Status
          </span>
        </div>
        <div className="tab-1">
          <span>
            {" "}
            More and more properties are being flooded—even in areas fema
            considers less risky
          </span>
          <div className="articles-wrapper">
            <article className="left-side-article">
              <p>
                FEMA's flood insurance maps divide land into zones according to
                the level of flood risk.
              </p>
              <img src={bottomGraphic} className="bottom-graphic" />
              {/* ASSET GOES HERE */}
            </article>
            <article className="right-side-article">
              <span
                style={{ marginTop: "20px", display: "block", maxWidth: "70%" }}
              >
                {" "}
                In the United States, 21% of SRLPS are outside FEMA-designated
                flood zones{" "}
              </span>
              <p style={{ paddingLeft: "10px", width: "60%" }}>
                FEMA considers A and V zones to be particularly higher risk.
                Properties in B, C, and X zones are considered to have lower
                risk because they are outside the 1% annual chance (or 100-year)
                floodplain.
              </p>
              <img src={pieChart} className="pie" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSectionParent;
