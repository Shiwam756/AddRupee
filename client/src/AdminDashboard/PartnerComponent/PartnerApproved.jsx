import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddRupeeText from "../../assets/addrupeeText.png";

const PartnerApproved = () => {
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

  const fetchPartnerData = async (status) => {
    try {
      const url = `http://localhost:5000/api/getPartnerData?status=${status}`;
      const data = await fetch(url);
      const result = await data.json();
      setPartnerData(result);

      console.log(result);
    } catch (error) {
      console.error(`Error fetching ${status} partner data:`, error);
    }
  };

  useEffect(() => {
    fetchPartnerData("approved");
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
          <h2>Approved Partner Details</h2>
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
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => openModal(data)}
                      >
                        View
                      </button>
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

export default PartnerApproved;
