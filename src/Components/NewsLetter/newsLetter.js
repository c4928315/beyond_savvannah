import React from "react";
import "./newsLetter.css";

function NewsLetter() {
  return (
    <div className="newsLetterContainer">
      <div className="topH1 topH1ServedAndroid marginTop2rem">
          <div className="topH1Innder ">
            <p>Newsletter</p>
            <h1>Stay in the Loop</h1>
          </div>
        </div>
      <div className="newsLetterInner">
        <div>
          <div className="newsLetterHeader">
            <p className="btsNewletter">Beyond Savannah Newsletter</p>
            <h1>Don’t miss out on applying for your dream remote job.</h1>
          </div>
          <div className="newsLetterSubHeader">
            <p>
              Get curated, remote jobs listings hiring worldwide in your inbox
              as well as updates in the remote world trends. Unsubscribe
              anytime. No spam, guaranteed.
            </p>
          </div>
          <div className="subscribeNewsLetter">
            <span className="subscribeNewsLetterArea">
              <input type="text" placeholder=" Enter your email address" />
            </span>
            <span className="subscribeNewsLetterBtn">
              <button type="submit">Subscribe</button>
            </span>
          </div>
        </div>
      </div>
      <div className="newsLetterDesign"></div>
    </div>
  );
}

export default NewsLetter;
