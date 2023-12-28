import React, { useState, useEffect } from "react";
import numberToWords from "number-to-words";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "../../PartnerHeader";
import Sidebar from "../../PartnerSidebar";
import "../../App.css";

const PartnerTlDashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("from1to31");
  const [selectedBankFilter, setSelectedBankFilter] = useState("all");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [allData, setData] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [rejectData, setRejectedData] = useState([]);

  const parseAmount = (amountString) => {
    if (typeof amountString === "string") {
      const cleanedAmount = amountString.replace(/[,\s]/g, ""); // Remove commas and white spaces
      return isNaN(cleanedAmount) ? 0 : Number(cleanedAmount);
    }
    return 0; // Return 0 if amountString is not a string
  };

  const sumLoginLeads = allData.reduce(
    (acc, item) => acc + parseAmount(item.Loan_Amount_Applied),
    0
  );

  const sumPending = pendingData.reduce(
    (pen, item) => pen + parseAmount(item.Loan_Amount_Applied),
    0
  );

  const sumDisbursed = approvedData.reduce(
    (acc, item) => acc + parseAmount(item.Loan_Amount_Applied),
    0
  );

  const sumRejected = rejectData.reduce(
    (acc, item) => acc + parseAmount(item.Loan_Amount_Applied),
    0
  );

  // LoginLeadsVolume
  // Convert numeric value to string with commas
  const numericRepresentation = sumLoginLeads.toLocaleString();
  // Convert numeric value to string using number-to-words
  const wordsRepresentation = numberToWords.toWords(sumLoginLeads);

  // PendingLeadsVolume
  // Convert numeric value to string with commas
  const PendingnumericRepresentation = sumPending.toLocaleString();
  // Convert numeric value to string using number-to-words
  const PendingwordsRepresentation = numberToWords.toWords(sumPending);

  // ApprovedLeadsVolume
  // Convert numeric value to string with commas
  const DisnumericRepresentation = sumDisbursed.toLocaleString();
  // Convert numeric value to string using number-to-words
  const DiswordsRepresentation = numberToWords.toWords(sumDisbursed);

  // RejectedLeadsVolume
  // Convert numeric value to string with commas
  const RejnumericRepresentation = sumRejected.toLocaleString();
  // Convert numeric value to string using number-to-words
  const RejwordsRepresentation = numberToWords.toWords(sumRejected);

  let Tl_Name = localStorage.getItem("TL_Name");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(
          `http://localhost:5000/api/p_fetchAlldata/${Tl_Name}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        let result = await data.json();
        setData((prevData) => {
          console.log("this is state", prevData); // Log the previous state for verification
          return result;
        });
        console.log("the result is ", result);
        console.log("this is state data", allData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Tl_Name, selectedFilter, selectedBankFilter]);

  const fetchPendingData = async () => {
    const Status = "Pending";
    let data = await fetch(
      `http://localhost:5000/api/p_getpendingtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setPendingData(result);
  };

  const fetchApprovedData = async () => {
    const Status = "Disbursed";
    let data = await fetch(
      `http://localhost:5000/api/p_getdisbursedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setApprovedData(result);
    console.log(result);
  };

  const fetchRejectedData = async () => {
    const Status = "Rejected";
    let data = await fetch(
      `http://localhost:5000/api/p_getrejectedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setRejectedData(result);
    console.log(result);
  };

  useEffect(() => {
    fetchPendingData();
    fetchApprovedData();
    fetchRejectedData();
  }, [selectedFilter, selectedBankFilter]);

  return (
    <div>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <main className="main-container">
          <div className="main-title">
            <h3 className="fs-3 text-dark ">{`${Tl_Name}'s Dashboard`}</h3>
          </div>

          <div className="filters_dropdown">
            <div>
              <select
                onChange={(e) => setSelectedFilter(e.target.value)}
                value={selectedFilter}
                className="select_date_filter"
              >
                <option value="from1to31" selected>
                  Select Date Filter
                </option>
                <option value="lastday">From Last Day</option>
                <option value="last7days">From Last 7 Days</option>
                <option value="last30days">From Last 30 Days</option>
                <option value="all">All Data</option>
              </select>
            </div>
            <div>
              <select
                onChange={(e) => setSelectedBankFilter(e.target.value)}
                value={selectedBankFilter}
                className="select_bank_filter"
              >
                <option value="all">All Banks</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="AXIS Bank">AXIS Bank</option>
                <option value="AXIS Finacnce">AXIS Finacnce</option>
                <option value="AU Small Finance Bank">
                  AU Small Finance Bank
                </option>
                <option value="Yes Bank">Yes Bank</option>
                <option value="IndusInd Bank">IndusInd Bank</option>
                <option value="ICICI Bank">ICICI Bank</option>
                <option value="Standard Chartered Bank">
                  Standard Chartered Bank
                </option>
                <option value="Bajaj">Bajaj</option>
                <option value="Cholamandalam Investment and Finance Company">
                  Cholamandalam Investment and Finance Company
                </option>
                <option value="Incred Financial Services ">
                  Incred Financial Services
                </option>
                <option value="Finnable Credit Pvt Ltd">
                  Finnable Credit Pvt Ltd
                </option>
                <option value="Paysense Services">Paysense Services</option>

                <option value="IDFC first Bank">IDFC First Bank</option>
                <option value="Tata Capital Finance Services Pvt Ltd">
                  Tata Capital Finance Services Pvt Ltd
                </option>

                <option value="Aditya Birla">Aditya Birla</option>
                <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>

                <option value="Standard Chartered Bank">
                  Standard Chartered Bank
                </option>
                <option value="Piramal Capital">Piramal Capital</option>
                <option value="RBL Bank">RBL Bank</option>

                <option value="Muthoot Finance Ltd">Muthoot Finance Ltd</option>
                <option value="IndusInd Bank Limited">
                  IndusInd Bank Limited
                </option>
                <option value="L&T Finance Ltd">L&T Finance Limited</option>
                <option value="Hero Finance Ltd">Hero Finance Limited</option>
                <option value="Bajaj Finance">Bajaj Finance</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="main-cards">
            <div className="dash_card">
              <Link
                style={{ textDecoration: "none" }}
                to="/partner_loan_tl_loginleads"
              >
                <div className="card-inner">
                  <h3 className="fs-5 fs-bold  py-3 text-white">
                    LOGIN LEADS - {allData.length}
                  </h3>
                  <BsFillArchiveFill
                    className="card_icon"
                    style={{ color: "white" }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    Volume - {numericRepresentation}
                  </span>
                </div>
                <p
                  style={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "10px",
                  }}
                >
                  {wordsRepresentation}
                </p>
              </Link>
            </div>

            <div className="dash_card">
              <Link
                style={{ textDecoration: "none" }}
                to="/partner_loan_tl_pending"
              >
                <div className="card-inner">
                  <h3 className="fs-5 fs-bold py-3 text-white">
                    PENDING - {pendingData.length}
                  </h3>
                  <BsFillGrid3X3GapFill
                    className="card_icon"
                    style={{ color: "white" }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Volume - {PendingnumericRepresentation}
                  </span>
                </div>
                <p
                  style={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "10px",
                  }}
                >
                  {PendingwordsRepresentation}
                </p>
              </Link>
            </div>
            <div className="dash_card">
              <Link
                style={{ textDecoration: "none" }}
                to="/partner_loan_tl_apporved"
              >
                <div className="card-inner">
                  <h3 className="fs-5 fs-bold p-3 text-white">
                    DISBURSED - {approvedData.length}
                  </h3>
                  <BsPeopleFill
                    className="card_icon"
                    style={{ color: "white" }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Volume - {DisnumericRepresentation}
                  </span>
                </div>
                <p
                  style={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "10px",
                  }}
                >
                  {DiswordsRepresentation}
                </p>
              </Link>
            </div>
            <div className="dash_card">
              <Link
                style={{ textDecoration: "none" }}
                to="/partner_loan_tl_rejected"
              >
                <div className="card-inner">
                  <h3 className="fs-5 fs-bold p-3 text-white">
                    REJECTED - {rejectData.length}
                  </h3>
                  <BsFillBellFill
                    className="card_icon"
                    style={{ color: "white" }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Volume - {RejnumericRepresentation}
                  </span>
                </div>
                <p
                  style={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "10px",
                  }}
                >
                  {RejwordsRepresentation}
                </p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PartnerTlDashboard;
