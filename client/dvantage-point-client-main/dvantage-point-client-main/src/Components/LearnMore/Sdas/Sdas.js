import React from "react";
import sdas2 from "../../../images/service-image/sdas/SDAS-1.jpg";
import sdas1 from "../../../images/service-image/sdas/SDAS_Cover.jpg";

const Sdas = () => {
  return (
    <div className="p-3">
      <div className="text-center">
        <h1 className="text-primary my-4">
          Software Development At Scale (SDAS)
        </h1>
      </div>

      <div className="text-center">
        <img className="img-fluid col-lg-8" src={sdas1} alt="" /> <br /> <br />
      </div>

      <div className="row">
        <div className="col-xs-2 col-sm-2 col-lg-2"></div>
        <div
          className="col-xs-8 col-sm-8 col-lg-8 my-5"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <p>
            <span className="text-primary display-4">
              <strong>A</strong>
            </span>
            pplications and software development at scale, deployment,
            management or customization, each of these are expanding their
            territory every moment. To manage growing demands of product
            lifecycle from digital industries, innovation is experiencing
            agility to its maximum.
          </p>
          <p>
            From UX design to backend system architecture, from development to
            deployment or integration, end to end software development and
            management lifecycle needs to reinvent the ways of IT engineering
            executions to meet the pressure from aggressive product owners. In
            fact, product owners now a days do not want to depend a lot on
            legacy systems, architecture or infrastructures. They are
            continuously seeking for functions and features driven by advanced
            analytics those can give birth of new babies with potential growth
            of the company.
          </p>
          <p>
            From UX design to interface development including web and apps
            (android & iOS), whether they are offline or needs online backend
            processing engines with advanced analytics and scalable
            infrastructure, DVANTAGEPOINT covers everything under one umbrella
            called SDAS (Software development at scale).
          </p>

          <div className="text-center py-4">
            <img className="img-fluid col-lg-8" src={sdas2} alt="" />
          </div>

          <p>
            From applications and software development to automation of
            infrastructure and network orchestrations, advanced analytics,
            capacity management, Operations & maintenance or hosting, all can be
            covered as one spot service. It's up to you on how much you want to
            leave to us to take care.{" "}
            <span className="text-primary">contact@dvantagepoint.com</span>
          </p>
        </div>
        <div className="col-xs-2 col-sm-2 col-lg-2"></div>
      </div>
      <div className="text-center p-1 my-5 ">
        <p>
          <small>© 2022-2023 DVANTAGEPOINT LIMITED</small>
        </p>
      </div>
    </div>
  );
};

export default Sdas;
