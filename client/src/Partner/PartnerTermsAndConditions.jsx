import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import Footer from "../Components/Footer";

const PartnerTermsAndConditions = () => {
  return (
    <section style={{ backgroundColor: "#E7E5E5", color: "#264653" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 0",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
        className="px-lg-5 px-md-4 px-2 "
      >
        <Link to={"/"}>
          <img
            style={{ height: "60px", width: "150px" }}
            src={logo}
            alt="AddRupee"
          />
        </Link>
        <Link
          style={{
            border: "2px solid #036E8C",
            color: "#036E8C",
            fontWeight: 600,
          }}
          className="btn"
          to={"/partner_register"}
        >
          Go Back
        </Link>
      </div>
      <div className="container py-5">
        <h1 style={{ fontWeight: 700 }}>
          Terms & Conditions for AddRupee Partners
        </h1>

        <p>
          Welcome to AddRupee's Partner Program. We appreciate your interest in
          joining our network of partners. The following terms and conditions
          outline the guidelines, obligations, and the Fraud and Cheating Policy
          associated with being a partner. By participating in the AddRupee
          Partner Program, you acknowledge that you have read, understood, and
          agreed to comply with these terms.
        </p>

        <p>
          <strong>1. Partner Eligibility:</strong>
          <br />
          <br />
          1.1 To be eligible for the AddRupee Partner Program, you must be a
          legal entity or an individual of legal age in your jurisdiction. The
          application process is subject to approval or rejection at AddRupee's
          discretion.
          <br />
          1.2 Partners must provide accurate and current information during the
          application process. AddRupee reserves the right to verify the
          information provided.
          <br />
          1.3 In the event of changes to your information, partners are
          responsible for updating their profiles promptly.
        </p>

        <p>
          <strong>2. Partner Responsibilities:</strong>
          <br />
          <br />
          2.1 Partners agree to actively promote AddRupee's products and
          services in a manner consistent with our brand guidelines.
          <br />
          2.2 Partners are responsible for the appropriate use of promotional
          materials provided by AddRupee. Any alterations or misuse may result
          in termination of the partnership.
          <br />
          2.3 Partners are strictly prohibited from engaging in misleading,
          deceptive, or unethical marketing practices. This includes false
          advertising, spamming, or any activity that may harm the AddRupee
          brand.
          <br />
          2.4 Partners must adhere to all applicable laws and regulations,
          including those related to privacy and data protection.
        </p>

        <p>
          <strong>3. Commission and Payment:</strong>
          <br />
          <br />
          3.1 Partners are eligible for commission based on the terms outlined
          in the partnership agreement. The commission structure and payment
          details will be communicated to partners upon acceptance into the
          program.
          <br />
          3.2 Commission payments will be made on a regular schedule as
          specified in the agreement. Payments are subject to validation of
          qualifying transactions and compliance with the terms.
          <br />
          3.3 AddRupee reserves the right to adjust commission rates or payment
          schedules with reasonable notice to partners. Any changes will be
          communicated via email or through the partner portal.
          <br />
          3.4 Partners are responsible for providing accurate payment
          information to facilitate commission payouts.
        </p>

        <p>
          <strong>4. Termination of Partnership:</strong>
          <br />
          <br />
          4.1 Either party may terminate the partnership at any time with
          written notice. AddRupee may terminate the partnership immediately for
          breach of these terms or for any other reason deemed appropriate.
          <br />
          4.2 In the event of termination, partners must cease using any
          AddRupee trademarks, logos, or promotional materials.
          <br />
          4.3 Termination will not affect the payment obligations for
          commissions earned prior to the termination date.
        </p>

        <p>
          <strong>5. Intellectual Property:</strong>
          <br />
          <br />
          5.1 AddRupee grants partners a non-exclusive, non-transferable license
          to use its trademarks, logos, and marketing materials solely for the
          purpose of promoting AddRupee's products and services.
          <br />
          5.2 Partners agree not to modify, reproduce, or distribute AddRupee's
          intellectual property without prior written consent.
          <br />
          5.3 AddRupee retains all rights, title, and interest in its
          intellectual property.
        </p>

        <p>
          <strong>6. Confidentiality:</strong>
          <br />
          <br />
          6.1 Partners agree to maintain the confidentiality of any proprietary
          information or trade secrets disclosed by AddRupee during the
          partnership.
          <br />
          6.2 Confidential information includes, but is not limited to, business
          strategies, financial information, customer data, and any other
          non-public information.
          <br />
          6.3 Partners may not disclose confidential information to third
          parties or use it for purposes other than those expressly agreed upon.
          <br />
          6.4 The obligation of confidentiality extends beyond the termination
          of the partnership.
        </p>
        <p>
          <strong>7. Fraud and Cheating Policy:</strong>
          <br />
          <br />
          <p>
            <b>7.1 Prohibited Activities:</b>
          </p>
          7.1.1 Partners are strictly prohibited from engaging in any fraudulent
          or cheating activities in connection with their participation in the
          AddRupee Partner Program.
          <br />
          7.1.2 Fraudulent activities include, but are not limited to, false
          transactions, unauthorized access to systems, misrepresentation, and
          any other deceptive practices intended to manipulate or abuse the
          program.
          <br />
          <br />
          <p>
            <b>7.2 Consequences of Fraud and Cheating:</b>
          </p>
          7.2.1 AddRupee reserves the right to investigate, monitor, and detect
          fraudulent activities by partners.
          <br />
          7.2.2 If fraud or cheating is suspected, AddRupee may take immediate
          action, including but not limited to: <br />
          - Suspension or termination of the partner's account. <br /> -
          Withholding or forfeiting commissions associated with fraudulent
          activities. <br /> - Pursuing legal action if necessary. <br />
          <br />
          <p>
            <b>7.3 Reporting Suspected Fraud:</b>
          </p>
          7.3.1 Partners are encouraged to report any suspected fraudulent
          activities promptly.
          <br />
          7.3.2 Reports should be submitted to <b>[support@addrupee.com]</b> and
          include detailed information regarding the suspected fraudulent
          activity.
          <br />
          <br />
          <p>
            <b>7.4 Prevention and Compliance:</b>
          </p>
          7.4.1 Partners must take reasonable measures to prevent fraud and
          cheating within their activities.
          <br />
          7.4.2 Partners agree to comply with all applicable laws and
          regulations related to fraud prevention and detection. <br /> <br />
          <p>
            <b>7.5 Legal Consequences:</b>
          </p>
          7.5.1 Engaging in fraudulent activities may lead to legal
          consequences, including but not limited to civil and criminal
          liabilities.
          <br />
          7.5.2 AddRupee will cooperate with law enforcement authorities and
          regulatory bodies in investigating and prosecuting fraudulent
          activities. <br /> <br />
          <p>
            <b>7.6 Reimbursement of Costs:</b>
          </p>
          7.6.1 Partners found guilty of engaging in fraudulent activities may
          be liable for reimbursing AddRupee for any costs incurred during the
          investigation and resolution of the fraudulent activity. <br />
          <br />
          <p>
            <b>7.7 Right to Modify Policy:</b>
          </p>
          7.7.1 AddRupee reserves the right to modify this Fraud and Cheating
          Policy at any time without prior notice.
          <br />
          7.7.2 Modifications may include changes to the definitions of
          fraudulent activities, the investigative process, and the consequences
          for engaging in such activities. <br /> <br />
          <p>
            <b>7.8 Acknowledgment:</b>
          </p>
          7.8.1 By participating in the AddRupee Partner Program, partners
          acknowledge and agree to abide by this Fraud and Cheating Policy.
          <br />
          7.8.2 Failure to comply with this policy may result in the termination
          of the partner's account and legal action as deemed necessary.
        </p>

        <p>
          <strong>8. Governing Law:</strong>
          <br />
          <br />
          8.1 These terms and conditions, including the Fraud and Cheating
          Policy, shall be governed by and construed in accordance with the laws
          of [Your Jurisdiction].
          <br />
          8.2 Any disputes arising from or in connection with these terms shall
          be subject to the exclusive jurisdiction of the courts in [Your
          Jurisdiction].
          <br />
          8.3 Partners agree to submit to the jurisdiction of [Your
          Jurisdiction] for the resolution of any disputes.
        </p>
        <p>
          <strong>9. Changes to Terms:</strong>
          <br />
          <br />
          9.1 AddRupee reserves the right to modify these terms and conditions
          at any time. Partners will be notified of any changes, and continued
          participation implies acceptance of the modified terms.
          <br />
          9.2 Modifications may include changes to commission structures,
          payment schedules, or any other aspect of the partnership program.
          <br />
          9.3 Partners are encouraged to review the terms regularly for updates.
        </p>
        <p>
          <strong>10. Communication:</strong>
          <br />
          <br />
          10.1 Partners agree to receive communications from AddRupee, including
          newsletters, updates, and promotional materials.
          <br />
          10.2 Opting out of certain communications may impact the partner's
          ability to receive important updates or announcements.
        </p>
        <p>
          <strong>11. Entire Agreement:</strong>
          <br />
          <br />
          11.1 These terms and conditions, including the Fraud and Cheating
          Policy, constitute the entire agreement between AddRupee and its
          partners, superseding any prior agreements or understandings, whether
          written or oral.
          <br />
          11.2 No modification of these terms shall be valid unless made in
          writing and signed by both parties.
        </p>

        <p>
          <strong>Contact Us</strong>
          <br />
          <br />
          Please take the time to carefully review these terms and conditions,
          including the Fraud and Cheating Policy. If you have any questions or
          concerns, please contact our support team at{" "}
          <b>support@addrupee.com</b>.
        </p>
        <br />
        <h4 style={{ fontWeight: 600, fontSize: "22px" }}>AddRupee</h4>
        <h4 style={{ fontWeight: 600, fontSize: "22px" }}>
          G-13, sector 6 noida - 201301
        </h4>
        <p>
          <i>21st December 2023</i>
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default PartnerTermsAndConditions;
