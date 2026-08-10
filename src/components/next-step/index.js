import React from "react";
import "./style.css";
import Link from "next/link";
import TronButton from "../../layout/hover-button/tourn-but";
import TronRequestADemo from "../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../layout/hover-button/WhiteButtonBammer";

const NextStep = (props) => {

  return (
    <div className="nextStepWrapper">
      <h3>Take the</h3>
      <div className="next-title">
        <div className="nextStepHeading">next step</div>
      </div>
      <div className="next-step-page-description">
        <p className="next-step-data">
        Increase your business value. <br></br>Start systemising today.
        </p>
        <span className="next-step-data-description">
         Strong systems, documented history and operational traceability increase buyer confidence and long-term valuation.
        </span>
      </div>
      <div className="next-step-btn-container">
               <div className="dflexbannerbtn">
      <div className="request-btn request-btn-bg">
        <Link href="https://app.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text={props.text} /></Link>
      </div>
      <div className="request-btn">
        <Link
          href="https://app.memate.com.au/onboarding"
          target="_blank"
          className="nav-btn--get-started  navbar-link"
        >
            <WhiteButtonBammer text="Start Free Trial"/>
        </Link>
            </div>
      </div>

      </div>
    </div>
  );
};

export default NextStep;
