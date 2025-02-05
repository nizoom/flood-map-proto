import React from "react";
import "../css/top-section.css";

const TopSectionParent = () => {
  return (
    <section className="top-section-parent">
      <div className="top-section-banner">
        <div className="top-section-banner-element" id="losing-ground">
          <span>Losing Ground</span>
        </div>
        <div className="top-section-banner-element" id="middle-el">
          <span> SEVERE REPETATIVE FLOODING IN THE UNITED STATES </span>
        </div>
        {/* ASSETS */}
        <div className="top-section-banner-element" id="what-is-NFIP">
          <span> WHAT IS THE NFIP ? </span>
        </div>
      </div>

      <div className="info-panel-group">
        <div className="info-panel">
          <h5> SEVERE REPETATIVE PROPERTY LOSS (SRPL)</h5>
          <p>
            SRPLs are the most flood prone properties covered by the National
            Flood Insurane Program (NFIP). Since 1970s, nearly 45,000 properties
            have met the criteria to become SRLPs
          </p>
        </div>
        <div className="info-panel">
          <p>
            <p>
              <span> In the United States </span> 44,616 properties have methe
              criteria to become SRPLs.
            </p>
            <p>34,015 of those have not been mitigated as of December 2022.</p>
          </p>
        </div>
        <div className="info-panel">
          <p>
            SRLPs in the United States have an average of 5.1 NFIP claims, but
            the actual number of flood may be higher. SRLPS account for 0.8% of
            all NFIP policies in the UNITED STATES but 12.8% of the claim
            payments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopSectionParent;
