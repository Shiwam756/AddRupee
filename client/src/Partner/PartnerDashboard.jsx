import React, { useEffect, useState } from "react";
import numberToWords from "number-to-words";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "./PartnerHeader";
import Sidebar from "./PartnerSidebar";
import "./App.css";

function PartnerDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("from1to31");
  const [selectedBankFilter, setSelectedBankFilter] = useState("all");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Loan State
  const [allData, setData] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [rejectData, setRejectedData] = useState([]);

  // Card State

  const [allCardData, setCardData] = useState([]);
  const [pendingCardData, setCardPendingData] = useState([]);
  const [approvedCardData, setApprovedCardData] = useState([]);
  const [rejectCardData, setRejectedCardData] = useState([]);

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

  const fetchAlldata = async () => {
    try {
      let data = await fetch(
        `http://localhost:5000/api/fetchpartnerAlldata?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!data.ok) {
        throw new Error(`Error: ${data.status} - ${data.statusText}`);
      }

      let result = await data.json();
      setData(result);
      console.log("Data retrieved successfully:", result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const fetchPendingData = async () => {
    const Status = "Pending";

    try {
      let data = await fetch(
        `http://localhost:5000/api/getpendingpartnerdatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      let result = await data.json();
      setPendingData(result);
    } catch (error) {
      console.error("Error fetching pending data:", error.message);
    }
  };

  const fetchApprovedData = async () => {
    const Status = "Disbursed";

    try {
      let data = await fetch(
        `http://localhost:5000/api/getdisbursedpartnerdatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      let result = await data.json();
      setApprovedData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching approved data:", error.message);
    }
  };

  const fetchRejectedData = async () => {
    const Status = "Rejected";

    try {
      let data = await fetch(
        `http://localhost:5000/api/getrejectedpartnerdatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      let result = await data.json();
      setRejectedData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching rejected data:", error.message);
    }
  };

  // Set Admin card

  const fetchCardAlldata = async () => {
    try {
      let data = await fetch(
        `http://localhost:5000/api/fetchCardpartnerAlldata?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!data.ok) {
        throw new Error(`Error: ${data.status} - ${data.statusText}`);
      }

      let result = await data.json();
      setCardData(result);
      console.log("Data retrieved successfully:", result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const fetchCardPendingData = async () => {
    const Status = "Pending";

    try {
      let data = await fetch(
        `http://localhost:5000/api/getCardpendingpartnerdatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      let result = await data.json();
      setCardPendingData(result);
    } catch (error) {
      console.error("Error fetching pending data:", error.message);
    }
  };

  const fetchCardApprovedData = async () => {
    const Status = "Disbursed";

    try {
      let data = await fetch(
        `http://localhost:5000/api/getCarddisbursedpartnerdatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      let result = await data.json();
      setApprovedCardData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching approved data:", error.message);
    }
  };

  const fetchCardRejectedData = async () => {
    const Status = "Rejected";

    try {
      let data = await fetch(
        `http://localhost:5000/api/getCardrejectedpartnerdatas/${Status}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      let result = await data.json();
      setRejectedCardData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching rejected data:", error.message);
    }
  };

  useEffect(() => {
    fetchAlldata();
    fetchPendingData();
    fetchApprovedData();
    fetchRejectedData();

    fetchCardAlldata();
    fetchCardPendingData();
    fetchCardApprovedData();
    fetchCardRejectedData();
  }, [selectedFilter, selectedBankFilter]);

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <main className="main-container">
        <div className="main-title">
          <h3 className="fs-3 text-dark ">Dashboard</h3>
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
              to="/partner_loan_loginleads"
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
            <Link style={{ textDecoration: "none" }} to="/partner_loan_pending">
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
              to="/partner_loan_approved"
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
              to="/partner_loan_rejected"
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

        <div className="main-title">
          <h3 className="fs-3 text-dark ">Credit Card</h3>
        </div>

        <div className="main-cards">
          <div className="dash_card">
            <Link
              style={{ textDecoration: "none" }}
              to="/partner_card_loginleads"
            >
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">LOGIN LEADS</h3>
                <BsFillArchiveFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
              <h3 className="text-white fs-3">{allCardData.length}</h3>
            </Link>
          </div>

          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/partner_card_pending">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">PENDING</h3>
                <BsFillGrid3X3GapFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
              <h1 className="text-white fs-3">{pendingCardData.length}</h1>
            </Link>
          </div>
          <div className="dash_card">
            <Link
              style={{ textDecoration: "none" }}
              to="/partner_card_approved"
            >
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">DISBURSED</h3>
                <BsPeopleFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
            </Link>
            <h1 className="text-white fs-3">{approvedCardData.length}</h1>
          </div>
          <div className="dash_card">
            <Link
              style={{ textDecoration: "none" }}
              to="/partner_card_rejected"
            >
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">REJECTED</h3>
                <BsFillBellFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
              <h1 className="text-white fs-3">{rejectCardData.length}</h1>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PartnerDashboard;
