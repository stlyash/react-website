
import React, { useState } from 'react';

export const Footer = () => {
  const [emailCopyStatus, setEmailCopyStatus] = useState('copy');
  const [phoneCopyStatus, setPhoneCopyStatus] = useState('copy');

  const copyText = (text, setStatus) => {
    navigator.clipboard.writeText(text)
      .then(() => setStatus('done'))
      .catch(error => console.error('Copy failed:', error));

    setTimeout(() => setStatus('copy'), 3000);
  };

  return (
    <div>
      <div className="row" style={{ alignItems: "center",backgroundColor: "rgb(0, 123, 191)" }}>
        <div className="col firstrow" style={{ margin: "3%" }}>
          <img id="sign" alt="Signature of Yashasvi" src={"./footer_assets/signature.png"} />
        </div>
        
        <div className="col ctcme secrow" style={{ margin: "3%", textAlign: "center", marginRight: "20%" }}>
          <h3 id="cont">Contact Me</h3>
          <button
            style={{ color: "white", padding: 0, border: 0, backgroundColor: "transparent" }}
            onClick={() => copyText("yash@yashasvi.dev", setEmailCopyStatus)}
          >
            yash@yashasvi.dev
            <img id="em-cpy" src={`footer_assets/${emailCopyStatus}.png`} alt="Copy Button" />
          </button>
          | 
          <button
            style={{ color: "white", padding: 0, border: 0, backgroundColor: "transparent" }}
            onClick={() => copyText("+91 8540904380", setPhoneCopyStatus)}
          >
            +91 8540904380
            <img id="ph-cpy" src={`footer_assets/${phoneCopyStatus}.png`} alt="Copy Button" />
          </button>
        </div>
        <div style={{ height: "1px", backgroundColor: "rgb(148, 168, 223)" }}></div>
        <span style={{ textAlign: "center", margin: "2%" }}>
          <a target='_blank' style={{ color: "white" }} href="https://github.com/stlyash/personal-web/blob/main/LICENSE">
            Copyright © 2023 Yashasvi
          </a>
        </span>
      </div>
    </div>
  );
};
