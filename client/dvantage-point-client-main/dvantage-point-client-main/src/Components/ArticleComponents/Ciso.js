import React from "react";

const Ciso = () => {
  return (
    <div className="p-3 container-fluid">
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-lg-2"></div>

        <div
          className="col-xs-8 col-sm-8 col-lg-8 "
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <p>
            CISOs, are you ready to take your organization's IT security to the
            next level? Implement the Maker-Checker Principle and be ready with
            the latest application and tools like EDR, XDR, SOAR, SIEM, IPS,
            DIP, WAF, FWs, etc. Don't forget to continuously scan and perform
            periodic VA and PT (Full-stack). Orchestrate your InfoSec as a
            checker, not a challenger, and automate your security with SOC.
            Practice Dev-Sec-Ops, including hardening, awareness, training, and
            cyber resilient releases. Let's make sure our IT is both compliant
            and secure!{" "}
          </p>
        </div>
        <div className="text-center">
          <img
            style={{ width: "60%", height: "auto", margin: "50px" }}
            src="https://media.licdn.com/dms/image/v2/D5622AQFE4NKQc5wrUg/feedshare-shrink_800/feedshare-shrink_800/0/1706806462766?e=2147483647&v=beta&t=kmZHq7Fd9-TiBHEujq08Ta2IODYafdUZNmEZhxWzJaU"
            alt=""
          />
        </div>
        <div className="col-xs-2 col-sm-2 col-lg-2"></div>
      </div>

      <div className="text-center p-1 my-5 ">
        <p>
          <small>© 2019-2025 DVANTAGEPOINT LIMITED</small>
        </p>
      </div>
    </div>
  );
};

export default Ciso;
