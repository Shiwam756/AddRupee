import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddRupeeText from "../../assets/addrupeeText.png";

const PartnerRequest = () => {
  const [partnerData, setPartnerData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const viewPrevious = () => {
    const currentIndex = partnerData.findIndex(
      (item) => item.id === selectedData.id
    );
    const previousIndex =
      (currentIndex - 1 + partnerData.length) % partnerData.length;
    const previousData = partnerData[previousIndex];
    setSelectedData(previousData);
  };

  const viewNext = () => {
    const currentIndex = partnerData.findIndex(
      (item) => item.id === selectedData.id
    );
    const nextIndex = (currentIndex + 1) % partnerData.length;
    const nextData = partnerData[nextIndex];

    setSelectedData(nextData);
  };

  const deleteData = () => {
    const updatedData = partnerData.filter(
      (item) => item.id !== selectedData.id
    );
    setPartnerData(updatedData);
    setIsModalOpen(false); // Close modal after deletion
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteData();
      alert("User deleted successfully!");
    }
  };

  const fetchPartnerData = async () => {
    try {
      const url = "http://localhost:5000/api/getPartnerdata?status=pending";
      const data = await fetch(url);

      if (!data.ok) {
        throw new Error(`Failed to fetch data: ${data.status}`);
      }

      const result = await data.json();
      setPartnerData(result);

      console.log(result);
    } catch (error) {
      console.error("Error fetching partner data:", error);
    }
  };

  const approveRequest = async (partnerId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/approve-partner/${partnerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Assuming your backend API responds with a success message
        alert("Partner request approved successfully!");
        // Optional: Refresh the partner data after approval
        fetchPartnerData();
      } else {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Failed to approve partner request."
        );
      }
    } catch (error) {
      console.error("Error approving partner request:", error);
      alert("Error approving partner request. See console for details.");
      // Handle error appropriately (show an error message, log, etc.)
    }
  };

  const rejectRequest = async (partnerId) => {
    try {
      const response = await fetch(
        ` http://localhost:5000/api/reject-partner/${partnerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Assuming your backend API responds with a success message
        alert("Partner request Rejected successfully!");
        // Optional: Refresh the partner data after approval
        fetchPartnerData();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to reject partner request.");
      }
    } catch (error) {
      console.error("Error approving partner request:", error);
      alert("Error rejecting partner request. See console for details.");
      // Handle error appropriately (show an error message, log, etc.)
    }
  };

  const deleteRequest = async (partnerId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/delete-partner/${partnerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Assuming your backend API responds with a success message
        alert("Partner deleted successfully!");
        fetchPartnerData();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to reject partner request.");
      }
    } catch (error) {
      console.error("Error approving partner request:", error);
      alert("Error rejecting partner request. See console for details.");
      // Handle error appropriately (show an error message, log, etc.)
    }
  };

  useEffect(() => {
    fetchPartnerData();
  }, []);

  return (
    <div>
      <div className="container-fluid px-lg-5 px-md-4 px-2">
        <div className="d-flex justify-content-between align-items-center py-2 shadow-sm">
          <Link to={"/"}>
            <img
              style={{ height: "50px", width: "170px" }}
              src={AddRupeeText}
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
            to={"/admin-dashboard"}
          >
            Go Back
          </Link>
        </div>
        <div className="container mt-4">
          <h2>Partner Request</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>FatherName</th>
                  <th>PhoneNo</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>reference1mobile</th>
                  <th>Company Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {partnerData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.fathername}</td>
                    <td>{data.mobileno}</td>
                    <td>{data.personalemailid}</td>
                    <td>{data.currentCity}</td>
                    <td>{data.reference1mobile}</td>
                    <td>{data.companyName}</td>
                    <td>
                      <div>
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Action
                          </button>
                          <ul
                            class="dropdown-menu"
                            style={{ textAlign: "center" }}
                          >
                            <li>
                              <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => openModal(data)}
                              >
                                View
                              </button>
                            </li>
                            <li>
                              <button
                                className="btn btn-outline-success btn-sm m-2"
                                onClick={() => {
                                  // Show a confirmation dialog
                                  if (
                                    window.confirm(
                                      "Are you sure you want to approve this partner?"
                                    )
                                  ) {
                                    console.log("Data:", data);
                                    if (data._id) {
                                      console.log(
                                        "Approving partner with ID:",
                                        data._id
                                      );
                                      approveRequest(data._id);
                                    } else {
                                      console.error(
                                        "Error: Partner ID is undefined or null."
                                      );
                                    }
                                  }
                                }}
                              >
                                Approved
                              </button>
                            </li>
                            <li>
                              <button
                                className="btn btn-outline-danger btn-sm m-2"
                                onClick={() => {
                                  // Show a confirmation dialog
                                  if (
                                    window.confirm(
                                      "Are you sure you want to Reject this partner?"
                                    )
                                  ) {
                                    console.log("Data:", data);
                                    if (data._id) {
                                      rejectRequest(data._id);
                                    } else {
                                      console.error(
                                        "Error: Partner ID is undefined or null."
                                      );
                                    }
                                  }
                                }}
                              >
                                Reject
                              </button>
                            </li>

                            <li>
                              <button
                                className="btn btn-outline-danger btn-sm m-2"
                                onClick={() => {
                                  // Show a confirmation dialog
                                  if (
                                    window.confirm(
                                      "Are you sure you want to delete this partner?"
                                    )
                                  ) {
                                    console.log("Data:", data);
                                    if (data._id) {
                                      deleteRequest(data._id);
                                    } else {
                                      console.error(
                                        "Error: Partner ID is undefined or null."
                                      );
                                    }
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      {selectedData && (
        <div
          className={`modal ${isModalOpen ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: isModalOpen ? "block" : "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">View Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <p> Name: {selectedData.name}</p>
                  <p>fathername: {selectedData.fathername}</p>
                  <p> PhoneNo: {selectedData.mobileno}</p>
                  <p> Email: {selectedData.personalemailid}</p>
                  <p> City: {selectedData.currentCity}</p>
                  <p> Reference PhoneNo : {selectedData.reference1mobile}</p>
                  <p> Companay Name : {selectedData.companyName}</p>

                  {/* Add other details here */}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={viewPrevious}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={viewNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerRequest;
