import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/addrupeeText.png";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get_user_data")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          setEmail(res.data.email);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
          // Redirect to login page if not authenticated
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
        // Redirect to login page if there's an error
        navigate("/signin");
      });
  }, [navigate]);

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/api/emp_logout")
      .then((res) => {
        // location.reload(true);
        if (res.data.Status === "Success") {
          // Clear local storage
          localStorage.clear();
          navigate("/signin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img style={{ height: "40px", width: "130px" }} src={Logo} />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {auth ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ color: "#dad7cd" }}>Welcome</h4>
            <span style={{ color: "white" }}>{name}</span>
            <span style={{ color: "white", fontSize: "14px" }}>{email}</span>
          </div>
        ) : null}
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/admin-dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <div class="dropdown">
            <Link
              class="dropdown-toggle"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsFillArchiveFill className="icon" /> Loan Leads
            </Link>
            <ul class="dropdown-menu">
              <li>
                <Link class="dropdown-item" to="/admin_loginlead">
                  Login Leads
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/admin_pending ">
                  Pending Leads
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/admin_approved">
                  Disbursal Leads
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/admin_reject">
                  Rejected Leads
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="sidebar-list-item">
          <div class="dropdown">
            <Link
              class="dropdown-toggle"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsFillArchiveFill className="icon" /> Customer's Data
            </Link>
            <ul class="dropdown-menu">
              <li>
                <Link class="dropdown-item" to="/customer_loandata">
                  Loan
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/customer_carddata ">
                  Credit Card
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/customer_cibildata">
                  Cibil
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="sidebar-list-item">
          <Link to="/admin_reports">
            <BsFillGrid3X3GapFill className="icon" />
            Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <div class="dropdown">
            <Link
              class="dropdown-toggle"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsFillArchiveFill className="icon" /> Credit Card
            </Link>
            <ul class="dropdown-menu">
              <li>
                <Link class="dropdown-item" to="/admin_card_loginlead">
                  Login Leads
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/admin_card_pending ">
                  Pending Leads
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/admin_card_approved">
                  Disbursal Leads
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/admin_card_reject">
                  Rejected Leads
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* Partner Leads*/}

        <li className="sidebar-list-item">
          <div class="dropdown">
            <Link
              class="dropdown-toggle"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsFillArchiveFill className="icon" /> Partner Details
            </Link>
            <ul class="dropdown-menu">
              <li>
                <Link class="dropdown-item" to="/partner_request ">
                  Partner Request
                </Link>
              </li>

              <li>
                <Link class="dropdown-item" to="/approved_partner">
                  Approved Partner
                </Link>
              </li>

              <li>
                <Link class="dropdown-item" to="/rejected_partner">
                  Rejected Partner
                </Link>
              </li>

              <li>
                <Link class="dropdown-item" to="/partner_reports">
                  Partner Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {auth ? (
          <div>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </aside>
  );
}

export default Sidebar;
