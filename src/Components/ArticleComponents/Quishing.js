const Quishing = () => {
  return (
    <div className="p-3 container-fluid">
      <div className="text-center">
        <h1 className="text-primary my-4">
          {" "}
          SIEM at the Helm: Transforming Cybersecurity Through Intelligent
          Threat Management
        </h1>
      </div>
      <div className="text-center">
        <img
          style={{ width: "60%", height: "30%", margin: "50px" }}
          src="https://media.licdn.com/dms/image/v2/D5612AQHSEEm_RzSILQ/article-cover_image-shrink_720_1280/B56ZdaoyCPHEAM-/0/1749572335862?e=2147483647&v=beta&t=BOdD9AC4xG63rK7nxDiCp87Hg8-UNKvZd3Fw7Tuugts"
          alt=""
        />
      </div>

      <div className="row">
        <div className="col-xs-2 col-sm-2 col-lg-2"></div>

        <div
          className="col-xs-8 col-sm-8 col-lg-8 "
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <h4>
            Quishing- QR version of phishing attack: The Sneaky New Kid on the
            Block!
          </h4>

          <p>
            QR codes are truly ubiquitous, appearing on menus, advertisements,
            payment terminals, and even in your hotel room. They're incredibly
            convenient, whisking you away to websites, apps, or payment portals
            with a simple scan. No more typing out long, convoluted URLs! But
            here's the rub: that convenience comes at a cost – a lack of
            transparency. When you scan a QR code, you often have no idea where
            it's truly taking you until it's too late.
          </p>

          <p>
            Imagine this: You're at your favorite restaurant, ready to order.
            You scan the "Menu" QR code, expecting to see delicious dishes.
            Instead, you're silently redirected to a malicious site that
            downloads malware onto your phone. Or perhaps you scan a "Login" QR
            code at a supposed Wi-Fi hotspot, only to be presented with a fake
            login page designed to snatch your credentials. And what about that
            "Pay Now" QR code? It could be siphoning off your credit card
            details straight to the dark web! These aren't far-fetched
            scenarios; they're the terrifying reality of quishing.
          </p>

          <h5>A Deep Dive into the Phishing Family Tree</h5>

          <p>
            Quishing isn't an isolated phenomenon; it's the latest evolution in
            the ever-expanding universe of phishing attacks. Let's quickly recap
            some of its notorious cousins:
          </p>

          <ul>
            <li>
              <p>
                <b>Phishing:</b> The classic bait-and-switch! Attackers send
                emails pretending to be from legitimate organizations, luring
                you into clicking malicious links or revealing sensitive
                information.
              </p>
            </li>
            <li>
              <p>
                <b>Spear Phishing:</b> A more targeted and sinister approach.
                Attackers use publicly available information (or even internal
                leaks!) about you or your organization to craft highly
                convincing and personalized attacks. Think an email from "HR"
                about a fake policy update, customized with your company's
                branding.
              </p>
            </li>
            <li>
              <p>
                <b>Whaling:</b> This is the big game hunter of phishing! Whaling
                attacks target high-value individuals like CEOs, CXOs, or
                decision-makers, aiming to gain access to critical company
                assets or financial resources.
              </p>
            </li>
            <li>
              <p>
                <b>Smishing:</b> Phishing gone mobile! Attackers use SMS
                messages to deliver malicious links or trick you into calling
                fraudulent numbers.
              </p>
            </li>
            <li>
              <p>
                <b>Vishing:</b> The voice of deception! Vishing involves
                phishing attacks conducted via phone calls, where attackers
                impersonate legitimate entities to manipulate you into divulging
                information or performing actions.
              </p>
            </li>
          </ul>

          <p>
            And now, proudly joining this rogues' gallery, is <b>Quishing!</b>
            Attackers are leveraging the widespread adoption of QR codes to
            deliver their payloads. The truly unsettling part? Just by visiting
            a malicious website after scanning a quishing QR code, your device
            can be silently infected with malware. This malware can then
            tirelessly work in the background, siphoning off your passwords,
            credit card numbers, and other personally identifiable information
            (PII).
          </p>

          <h5>Don't Get Hooked! Your Guide to Quishing Prevention!</h5>
          <p>
            So, how do we protect ourselves from these cunning QR code cons?
            Let's talk about what works and what might leave you vulnerable.
          </p>
          <h5>The "Sounds Good, But..." Advice (Proceed with Caution!):</h5>
          <ul>
            <li>
              <p>
                <b>"Don't scan QR codes from strangers!"</b> While this sounds
                like solid advice, it's often impractical. Most QR codes you
                encounter in public – on parking meters, restaurant tables, or
                even in mail – are from sources you can't immediately verify.
                It's almost impossible to completely avoid "stranger" QR codes
                in our digital world.
              </p>
            </li>
            <li>
              <p>
                <b>"Even if it's from someone you know, be careful!"</b>{" "}
                Absolutely! Even if a trusted friend sends you a QR code, their
                system could have been compromised, and they might unknowingly
                be forwarding a malicious link. Trust, but verify!
              </p>
            </li>
          </ul>

          <h5>Your Anti-Quishing Arsenal (These REALLY Work!):</h5>
          <ol>
            <li>
              <p>
                <b>Think Before You Scan! </b>This is your golden rule! Before
                you whip out your phone, ask yourself:
              </p>
            </li>
            <li>
              <p>
                <b>Disable Auto-Execute!</b> Many QR code scanner apps and even
                your smartphone's built-in camera will automatically open the
                URL after scanning. <b>STOP THAT!</b> Look for settings in your
                app or camera to disable automatic execution. This gives you
                precious seconds to review the URL before your device goes
                rogue.
              </p>
            </li>
            <li>
              <p>
                <b>Look Before You Leap! Preview the URL!</b> This is your
                superpower! A reputable QR code scanner app (or your phone's
                camera in preview mode) will show you the destination URL before
                opening it. Scrutinize it!
              </p>
            </li>
            <li>
              <p>
                <b>Inspect for Tampering!</b> This is a sneaky one! Attackers
                can print malicious QR code stickers and place them over
                legitimate ones.
              </p>
            </li>
            <li>
              <p>
                <b>Use a Trusted Scanner App!</b> Not all scanner apps are
                created equal. Opt for well-reviewed, reputable apps that have
                built-in security features, such as:
              </p>
            </li>
            <li>
              <p>
                <b>Avoid Sketchy Sources!</b> While it's hard to avoid all
                "unknown" QR codes, be extra wary of:
              </p>
            </li>
            <li>
              <p>
                <b>Keep Your Devices Patched and Updated!</b> This is
                cybersecurity 101! Regularly update your operating system, apps,
                and security software. New software releases often include
                patches for vulnerabilities that attackers could exploit.
              </p>
            </li>
            <li>
              <p>
                <b>Embrace MFA and Passkeys!</b> Even if you accidentally land
                on a fake login page, Multi-Factor Authentication (MFA) or using
                Passkeys can be your saving grace. If the attacker steals your
                primary password, they still won't be able to access your
                account without that second factor (e.g., a code from an
                authenticator app, a fingerprint, or a Passkey).
              </p>
            </li>
            <li>
              <p>
                <b>Deploy a Trusted Mobile Security App!</b> A robust mobile
                security app can scan your device for malware, block malicious
                websites, and provide an extra layer of defense against quishing
                and other mobile threats.
              </p>
            </li>
            <li>
              <p>
                <b>Think Three Times Before Entering Sensitive Info!</b> If
                you've arrived at a website via a QR code, and it's asking for
                highly sensitive information like your social security number,
                bank account details, or extensive personal data, pause. Verify
                the legitimacy of the site through independent means before
                entering anything.
              </p>
            </li>
          </ol>
          <h5>For Businesses: Educate and Empower Your Team!</h5>
          <p>
            The human element is often the weakest link in cybersecurity.
            Businesses must proactively educate their employees about the
            dangers of quishing and other social engineering attacks.
          </p>
          <ul>
            <li>
              <p>
                <b>Train Your Users:</b> Conduct regular training sessions that
                explain what quishing is, showcase real-world examples, and
                emphasize best practices for safe QR code scanning.
              </p>
            </li>
            <li>
              <p>
                <b>Foster a Culture of Skepticism:</b> Teach your employees to
                question unexpected or unusual requests, even if they seem to
                come from a trusted source.
              </p>
            </li>
            <li>
              <p>
                <b>Simulate Attacks:</b> Consider running simulated quishing
                campaigns (with proper safeguards and ethical considerations) to
                test your employees' vigilance and identify areas for further
                training.
              </p>
            </li>
            <li>
              <p>
                <b>Emphasize Trust Can Be Abused:</b> Reinforce the idea that
                attackers prey on trust. A seemingly legitimate QR code can be a
                wolf in sheep's clothing, designed to exploit their helpfulness
                or curiosity.
              </p>
            </li>
          </ul>
          <p>
            The world of QR codes is constantly evolving, and with it, the
            methods bad actors use to exploit them. By staying informed,
            practicing vigilance, and implementing these crucial preventative
            measures, you can transform from a potential victim into a
            quishing-aware champion! Don't let those convenient little squares
            lead you down a dangerous path – scan smart, stay safe, and let's
            keep those hackers at bay!
          </p>
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

export default Quishing;
