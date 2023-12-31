import React, { useState } from "react";
import Axios from "axios";
import Header from "../Header";
import Sidebar from "../Sidebar";

function UploadCSV() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    // Check if the selected file is a CSV file
    const allowedExtensions = ["csv"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      alert("You have chosen the wrong format file. Please upload a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("csvFile", file);

    try {
      const response = await Axios.post(
        "https://api.addrupee.com/api/import-csv",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("CSV file uploaded successfully");
      console.log("CSV file uploaded successfully:", response.data);

      // Handle success, e.g., show a success message to the user.
    } catch (error) {
      alert(`Error uploading CSV file: ${error.response.data}`);
      console.error("Error uploading CSV file:", error);
      // Handle error, e.g., show an error message to the user.
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch("https://api.addrupee.com/download");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "sample.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading CSV:", error.message);
    }
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div style={styles.container}>
        <h1 style={styles.heading}>CSV File Upload</h1>
        <form onSubmit={handleUpload}>
          <input
            onChange={handleFileChange}
            type="file"
            name="csvFile"
            accept=".csv"
            style={styles.fileInput}
          />
          <button type="submit" style={styles.uploadButton}>
            Upload
          </button>
        </form>
        <div style={{ marginTop: "100px" }}>
          <p className="fs-lg-3 fs-sm-5 fw-bold ">Download Detail Sheet</p>
          <button className="btn btn-primary" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "400px",
    height: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f7f7f7",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  fileInput: {
    width: "100%",
    marginBottom: "10px",
  },
  uploadButton: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UploadCSV;
