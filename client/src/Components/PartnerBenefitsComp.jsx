import React from "react";
import { Link } from "react-router-dom";

const PartnerBenefitsComp = () => {
  return (
    <div>
      <div>
        <h2
          style={{
            fontWeight: 700,
            textAlign: "center",
            padding: "50px 0 20px",
            color: "#264653",
          }}
        >
          Benefits of Being an <span style={{ color: "#036E8C" }}>Add</span>
          <span style={{ color: "#3E9B77" }}>Rupee</span> Partner
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className=" benefits_box">
            <h4
              style={{
                color: "#264653",
                fontWeight: 600,
                fontSize: "22px",
                padding: "4px 0",
              }}
            >
              Technology Support
            </h4>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray" }}>
              Access cutting-edge technology for seamless transactions,
              enhancing your efficiency and providing a superior client
              experience.
            </p>
            <Link
              style={{ textDecoration: "none", fontWeight: 600 }}
              to={"/techno_support"}
            >
              Read More
            </Link>
          </div>
          <div className=" benefits_box">
            <h4
              style={{
                color: "#264653",
                fontWeight: 600,
                fontSize: "22px",
                padding: "4px 0",
              }}
            >
              Data Support
            </h4>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray" }}>
              Enjoy exclusive partner data support, ensuring secure transactions
              and personalized insights for optimal financial solutions.
            </p>
            <Link
              style={{ textDecoration: "none", fontWeight: 600 }}
              to={"/data_support"}
            >
              Read More
            </Link>
          </div>
          <div className=" benefits_box">
            <h4
              style={{
                color: "#264653",
                fontWeight: 600,
                fontSize: "22px",
                padding: "4px 0",
              }}
            >
              Real Time Update
            </h4>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray" }}>
              Stay ahead with instant, real-time updates on financial products,
              empowering you to offer timely and informed solutions to clients.
            </p>
            <Link
              style={{ textDecoration: "none", fontWeight: 600 }}
              to={"/real_time_update"}
            >
              Read More
            </Link>
          </div>
          <div className=" benefits_box">
            <h4
              style={{
                color: "#264653",
                fontWeight: 600,
                fontSize: "22px",
                padding: "4px 0",
              }}
            >
              On Time Payment
            </h4>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray" }}>
              Experience the reliability of on-time payments, ensuring a steady
              and predictable income stream for your partnership with AddRupee.
            </p>
            <Link
              style={{ textDecoration: "none", fontWeight: 600 }}
              to={"/on_time_payment"}
            >
              Read More
            </Link>
          </div>
          <div className=" benefits_box">
            <h4
              style={{
                color: "#264653",
                fontWeight: 600,
                fontSize: "22px",
                padding: "4px 0",
              }}
            >
              Backend Support
            </h4>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray" }}>
              Rely on robust backend support, streamlining your operations and
              ensuring a smooth, efficient experience for both you and your
              clients.
            </p>
            <Link
              style={{ textDecoration: "none", fontWeight: 600 }}
              to={"/backend_support"}
            >
              Read More
            </Link>
          </div>
          <div className=" benefits_box">
            <h4
              style={{
                color: "#264653",
                fontWeight: 600,
                fontSize: "22px",
                padding: "4px 0",
              }}
            >
              Paperless Process
            </h4>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray" }}>
              Embrace efficiency with a seamless paperless process, reducing
              hassles and enhancing the speed of financial transactions for
              partners.
            </p>
            <Link
              style={{ textDecoration: "none", fontWeight: 600 }}
              to={"/paperless_process"}
            >
              Read More
            </Link>
          </div>
          <div className=" benefits_box">
            <h4
              style={{
                color: "#264653",
                fontWeight: 600,
                fontSize: "22px",
                padding: "4px 0",
              }}
            >
              Personlized CRM
            </h4>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray" }}>
              Access a tailored CRM system, empowering you with personalized
              tools to manage and enhance client relationships effectively.
            </p>
            <Link
              style={{ textDecoration: "none", fontWeight: 600 }}
              to={"/personlized_crm"}
            >
              Read More
            </Link>
          </div>
          <div className=" benefits_box">
            <h4
              style={{
                color: "#264653",
                fontWeight: 600,
                fontSize: "20px",
                padding: "4px 0",
              }}
            >
              Marketing and Branding Support
            </h4>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray" }}>
              Elevate your presence with comprehensive marketing and branding
              support, unlocking new avenues for client acquisition and growth.
            </p>
            <Link
              style={{ textDecoration: "none", fontWeight: 600 }}
              to={"/marketing_branding_support"}
            >
              Read More
            </Link>
          </div>
          <div className=" benefits_box">
            <h4
              style={{
                color: "#264653",
                fontWeight: 600,
                fontSize: "22px",
                padding: "4px 0",
              }}
            >
              HR Support For Hiring Staff
            </h4>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray" }}>
              Simplify expansion with dedicated HR support, facilitating the
              seamless recruitment of staff for your growing financial services
              venture.
            </p>
            <Link
              style={{ textDecoration: "none", fontWeight: 600 }}
              to={"/hr_supprt_for_hiring_staff"}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBenefitsComp;
