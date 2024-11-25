import React from "react";

const KeyAspectsOfInformation = () => {
  return (
    <div className="p-3 container-fluid">
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-lg-2"></div>

        <div
          className="col-xs-8 col-sm-8 col-lg-8 "
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <p>
            Key aspects of information security tailored to the contemporary IT
            environment:
            <br />✨ Cloud Security: Specific to protecting data, applications,
            and infrastructures involved in cloud computing, addressing security
            concerns that are unique to public, private, and hybrid cloud
            environments.
            <br />✨ Mobile Security: Protecting personal and business
            information stored on mobile devices, such as smartphones and
            tablets, from various threats like malware, data leakage &
            unauthorized access.
            <br /> ✨ Identity & Access Management (IAM): Ensuring right
            individuals have access to the right resources at the right times
            for the right reasons.
            <br /> ✨ Endpoint Security: Protecting endpoints, such as desktops,
            laptops, and mobile devices, from malicious activities and cyber
            threats. This is critical as endpoints are often the target of
            initial compromise.
            <br /> ✨ Data Loss Prevention (DLP): Prevent sensitive information
            from leaving an organization's boundaries. This includes monitoring,
            detecting, and blocking sensitive data while in use, in motion, and
            at rest.
            <br /> ✨Encryption and Cryptography: Mathematical algorithms to
            protect information by converting it into a form that is unreadable
            to unauthorized users.
            <br /> ✨ Network Security: Protecting the usability and integrity
            of network configurations, access control list, micro-segmentation
            of applications and data.
            <br /> ✨ Application Security: The process of making apps more
            secure by identifying, fixing, and enhancing the security of
            software to prevent vulnerabilities and attacks.
            <br /> ✨ Threat Intelligence: Gathering,analyzing, and applying
            knowledge about existing and potential attacks that threaten the
            security of an organization's informational assets.
            <br /> ✨ Incident Response & Forensics: Preparing for and managing
            the aftermath of security breaches or attacks, including the
            investigation of incidents to prevent future occurrences.
            <br /> ✨ Compliance: Ensuring that information security policies
            and practices comply with relevant laws, regulations, and
            guidelines. This can include GDPR, HIPAA, PCI-DSS, and more,
            depending on the industry and region.
            <br /> ✨ Security Awareness and Training: Educating employees and
            users about the importance of security practices and policies.
            Training helps mitigate human error, a significant factor in
            breaches.
            <br /> ✨ Zero Trust Security Model: Organizations should not
            automatically trust anything inside or outside its perimeters.
            Instead, they must verify anything and everything trying to connect
            to its systems before granting access.
            <br /> ✨ Blockchain: Leveraging blockchain technology for enhancing
            security aspects, such as data integrity, by creating decentralized
            & immutable ledgers.
            <br /> ✨ Post-Quantum Cryptography: Preparing for impact of quantum
            computing on cryptography, by developing quantum-resistant
            cryptographic algorithms.
            <br /> ✨ Supply Chain Security: Ensuring security & managing risks
            associated with supply chain and the vendors within it. This
            includes software, hardware & service providers.
          </p>
        </div>
        <div className="text-center">
          <img
            style={{ width: "60%", height: "auto", margin: "50px" }}
            src="https://media.licdn.com/dms/image/v2/D5622AQHkkSJrqHF4sw/feedshare-shrink_800/feedshare-shrink_800/0/1710093469935?e=2147483647&v=beta&t=IbpP0o0Jn8NBpn834lW6fVGNvRj0Bz-oRJM5kFcCj7A"
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

export default KeyAspectsOfInformation;
