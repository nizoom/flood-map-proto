import React from "react";
import "../css/top-section.css";
import floodIcon from "../../flood-icon.png";
const TopSectionParent = () => {
  return (
    <section className="top-section-parent">
      <div className="top-section-banner">
        <div className="top-section-banner-element" id="losing-ground">
          <h1>Losing Ground</h1>
          <span> Severe repetitive flooding in the United States </span>
        </div>
        {/* ASSETS */}
      </div>
      <div className="top-section-banner-element" id="what-is-NFIP">
        <span> What Is The NFIP ? </span>
      </div>
      <div className="info-panel-group">
        <img src={floodIcon} className="flood-icon" />
        <div className="info-panel">
          <span className="info-heading">
            {" "}
            Severe repetitive property loss (SRPL)
          </span>
          <p style={{ paddingLeft: "2%" }}>
            SRPLs are the most flood prone properties covered by the National
            Flood Insurane Program (NFIP). Since 1970s, nearly 45,000 properties
            have met the criteria to become SRLPs
          </p>

          <p style={{ paddingLeft: "5%" }}>
            <span> In the United States </span> 44,616 properties have methe
            criteria to become SRPLs. 34,015 of those have not been mitigated as
            of December 2022.
          </p>

          <p style={{ paddingLeft: "2%" }}>
            SRPLs in Florida have an average of 4.2 NFIP claims, but the actual
            number of floods may be higher. SRLPs account for 0.2% of all NFIP
            policies in Floria but 8.9% of the claim payments
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopSectionParent;
