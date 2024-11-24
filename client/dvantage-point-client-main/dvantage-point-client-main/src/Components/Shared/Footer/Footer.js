import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import React from "react";
import australia from "../../../images/flag-icon/australia.png";
import bdFlag from "../../../images/flag-icon/bangladesh.png";
import canada from "../../../images/flag-icon/canada.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <footer className="text-center text-lg-start text-dark border-top my-5">
        <section className="d-flex justify-content-center  p-2">
          <div>
            <a
              href="https://www.facebook.com/Dvantagepoint-Limited-106835074561699"
              target="blank"
              className="me-4 link-secondary"
            >
              <FacebookIcon sx={{ fontSize: 40 }} color="primary" />
            </a>

            <a
              href="https://www.linkedin.com/company/dvantagepoint"
              target="blank"
              className="me-4 link-secondary"
            >
              <LinkedInIcon sx={{ fontSize: 40 }} color="primary" />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-2">
            <div className="row mt-3">
              <div className="text-center">
                <p className="text-primary">
                  <EmailIcon />
                  contact@dvantagepoint.com
                </p>
              </div>

              <div
                className="d-flex 
                                            justify-content-around 
                                            align-items-center
                                            flex-wrap"
              >
                <div
                  className="my-4
                                                shadow p-4 
                                                bg-body rounded
                                                 "
                  style={{ width: "330px" }}
                >
                  <p className="text-primary">
                    <small>
                      <PlaceIcon /> 7 Epping road, Epping, NSW-2121,
                    </small>
                  </p>

                  <p className="text-primary">
                    <small>
                      <img
                        style={{ width: "30px", marginLeft: "5px" }}
                        className="mx-2"
                        src={australia}
                        alt=""
                      />
                      Australia
                    </small>
                  </p>

                  <p className="text-primary">
                    <small>
                      <LocalPhoneIcon /> +61422375845
                    </small>
                  </p>
                </div>

                <div
                  className="my-4 shadow p-4   bg-body rounded"
                  style={{ width: "330px" }}
                >
                  <p className="text-primary">
                    <small>
                      <PlaceIcon /> 469, Queens Street,Thunderbay,Ontario
                    </small>
                  </p>

                  <p className="text-primary">
                    <small>
                      <img
                        style={{ width: "32px", marginLeft: "5px" }}
                        className="mx-2"
                        src={canada}
                        alt=""
                      />{" "}
                      Canada
                    </small>
                  </p>

                  <p className="text-primary">
                    <small>
                      <LocalPhoneIcon /> +180 763 19705
                    </small>
                  </p>
                </div>

                <div
                  className="my-4 shadow p-3 bg-body rounded"
                  style={{ width: "330px" }}
                >
                  <p className="text-primary">
                    <small>
                      <PlaceIcon /> 35/L7 Gareeb-E-Newaz Avenue, Uttara Dhaka
                      1230
                    </small>
                  </p>

                  <p className="text-primary">
                    <small>
                      <img
                        style={{ width: "30px", marginLeft: "5px" }}
                        src={bdFlag}
                        alt=""
                      />{" "}
                      Bangladesh
                    </small>
                  </p>

                  <p className="text-primary">
                    <LocalPhoneIcon /> +880 182 00 66 117
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-1 text-primary  footerBg">
          © 2019-2025 DVANTAGEPOINT LIMITED
        </div>
        {/*bg-color #45637d  <EmailIcon />*/}
      </footer>
    </div>
  );
};

export default Footer;
