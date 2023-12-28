import React, { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./TlSidebar";
import "./App.css";

function TlDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("from1to31");
  const [selectedBankFilter, setSelectedBankFilter] = useState("all");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Loan States
  const [allData, setData] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [rejectData, setRejectedData] = useState([]);

  // Card States
  const [cardAllData, setCardAllData] = useState([]);
  const [cardPendingData, setCardPendingData] = useState([]);
  const [cardApprovedData, setCardApprovedData] = useState([]);
  const [cardRejectData, setCardRejectedData] = useState([]);

  let Tl_Name = localStorage.getItem("TL_Name");
  console.log("TL_Name from localStorage:", Tl_Name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(
          `https://api.addrupee.com/api/fetchAlldata/${Tl_Name}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
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
      `https://api.addrupee.com/api/getpendingtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
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
      `https://api.addrupee.com/api/getdisbursedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
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
      `https://api.addrupee.com/api/getrejectedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
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
    const fetchCardData = async () => {
      try {
        let data = await fetch(
          `https://api.addrupee.com/api/card_fetchAlldata/${Tl_Name}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        let result = await data.json();
        setCardAllData((prevData) => {
          console.log("this is state", prevData); // Log the previous state for verification
          return result;
        });
        console.log("the result is ", result);
        console.log("this is state data", cardAllData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCardData();
  }, [Tl_Name, selectedFilter, selectedBankFilter]);

  const fetchCardPendingData = async () => {
    const Status = "Pending";
    let data = await fetch(
      `https://api.addrupee.com/api/card_getpendingtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardPendingData(result);
  };

  const fetchCardApprovedData = async () => {
    const Status = "Disbursed";
    let data = await fetch(
      `https://api.addrupee.com/api/card_getdisbursedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardApprovedData(result);
    console.log(result);
  };

  const fetchCardRejectedData = async () => {
    const Status = "Rejected";
    let data = await fetch(
      `https://api.addrupee.com/api/card_getrejectedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardRejectedData(result);
    console.log(result);
  };

  useEffect(() => {
    fetchPendingData();
    fetchApprovedData();
    fetchRejectedData();
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
          <h3 className="fs-3 text-dark ">Loan</h3>
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
            <div className="card-inner">
              <h3 className="fs-5 fs-bold p-3 text-white">LOGIN LEADS</h3>
              <BsFillArchiveFill className="card_icon" />
            </div>
            <h3 className="text-white fs-3">{allData.length}</h3>
          </div>

          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/tl_pending">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">PENDING</h3>
                <BsFillGrid3X3GapFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
              <h1 className="text-white fs-3">{pendingData.length}</h1>
            </Link>
          </div>
          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/TL_Approved">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">DISBURSED</h3>
                <BsPeopleFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
            </Link>
            <h1 className="text-white fs-3">{approvedData.length}</h1>
          </div>
          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/tl_reject">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">REJECTED</h3>
                <BsFillBellFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
              <h1 className="text-white fs-3">{rejectData.length}</h1>
            </Link>
          </div>
        </div>

        <div className="main-title">
          <h3 className="fs-3 text-dark ">Credit Card</h3>
        </div>

        <div className="main-cards">
          <div className="dash_card">
            <div className="card-inner">
              <h3 className="fs-5 fs-bold p-3 text-white">LOGIN LEADS</h3>
              <BsFillArchiveFill className="card_icon" />
            </div>
            <h3 className="text-white fs-3">{cardAllData.length}</h3>
          </div>

          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/tl_card_pending">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">PENDING</h3>
                <BsFillGrid3X3GapFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
              <h1 className="text-white fs-3">{cardPendingData.length}</h1>
            </Link>
          </div>
          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/tl_card_approved">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">DISBURSED</h3>
                <BsPeopleFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
            </Link>
            <h1 className="text-white fs-3">{cardApprovedData.length}</h1>
          </div>
          <div className="dash_card">
            <Link style={{ textDecoration: "none" }} to="/tl_card_reject">
              <div className="card-inner">
                <h3 className="fs-5 fs-bold p-3 text-white">REJECTED</h3>
                <BsFillBellFill
                  className="card_icon"
                  style={{ color: "white" }}
                />
              </div>
              <h1 className="text-white fs-3">{cardRejectData.length}</h1>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TlDashboard;
