import React from "react";

const AsOrganizationsGrow = () => {
  return (
    <div className="p-3 container-fluid">
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-lg-2"></div>

        <div
          className="col-xs-8 col-sm-8 col-lg-8 "
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <p>
            As organizations grow, so do their PCI DSS responsibilities and
            scope. For large companies, ensuring compliance with PCI DSS across
            the entire organization can be a complex and interconnected
            challenge. However, effective PCI DSS controls require a strong
            culture of collaboration and communication, as well as executive
            leadership support and commitment.
          </p>
          <p>
            To maintain continued compliance, all business units must be aware
            of their impact on the organization's security posture and its PCI
            DSS validation efforts. A practical approach is to establish
            security as a business-as-usual activity, embedding a consistent and
            repeatable approach to PCI DSS in the organization's overall
            security strategy.
          </p>
          <p>
            For large organizations, evolving approaches to ensure awareness of
            PCI DSS and maintaining compliance is crucial to effectively manage
            the complexities presented by multiple payment channels, complicated
            network architectures, and extensive inventories of devices in
            scope.
          </p>
          <p>
            Promoting the importance of compliance and governance controls that
            support PCI DSS validation is key to ensuring effective PCI DSS
            controls. With the right approach and commitment from executive
            leadership, large organizations can successfully navigate the
            complex landscape of PCI DSS compliance.
          </p>
        </div>
        <div className="text-center">
          <img
            style={{ width: "60%", height: "auto", margin: "50px" }}
            src="https://media.licdn.com/dms/image/v2/D4D22AQH_0nRxpBw-Tg/feedshare-shrink_800/feedshare-shrink_800/0/1708523230655?e=2147483647&v=beta&t=Y27hIF47nvXbaKAmq7co50R9YiaJFbRLr4lLK7AOwhM"
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

export default AsOrganizationsGrow;
