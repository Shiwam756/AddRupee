import {
  PDisbursedData,
  PEmployee,
  PFormalData,
  PPendingFormData,
  PRejectedData,
  partnerModel,
} from "../models/partnerModels.js";
import mongoose from "mongoose";
import moment from "moment";

//post API for the partner form
export const PartnerFormAllData = async (req, res) => {
  console.log("Received data:", req.body);
  try {
    const newUser = new partnerModel(req.body);
    await newUser.save();
    res.status(201).json({ message: "User saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get API for the partner from

export const getPartnerFormallData = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {}; // Apply filter only if status is provided

    const data = await partnerModel.find(filter);

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "No data found",
      });
    }

    console.log("Data fetched successfully...");
    return res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching partner data:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// API for approved from the partner side

export const approvePartnerRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    // Explicitly convert the requestId to ObjectId
    const partnerRequestId = new mongoose.Types.ObjectId(requestId);

    // Update the status of the partner request to 'approved'
    await partnerModel.findByIdAndUpdate(partnerRequestId, {
      status: "approved",
    });

    res.status(200).json({ message: "Partner request approved successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// API for reject  from the partner side

export const rejectPartnerRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    // Explicitly convert the requestId to ObjectId
    const partnerRequestId = new mongoose.Types.ObjectId(requestId);

    await partnerModel.findByIdAndUpdate(partnerRequestId, {
      status: "rejected",
    });

    res.status(200).json({ message: "Partner request rejected successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// API for delete from the partner side
export const deletePartnerRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { reason } = req.body;

    // Find the partner request
    const partnerRequest = await partnerModel.findById(requestId);

    if (!partnerRequest) {
      return res.status(404).json({ error: "Partner request not found" });
    }

    await partnerRequest.deleteOne();

    res.status(200).json({ message: "Partner request  deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// fetch all the data from FormalData with this API

export const getPartnerFormAllData = async (req, res) => {
  try {
    let query = {};
    const { filter, bankFilter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            Upload_Date: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            Upload_Date: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            Upload_Date: {
              $gte: moment().startOf("day"), // Start of today
              $lte: moment().endOf("day"), // End of today
            },
          };
          break;
        case "from1to31":
          query = {
            Upload_Date: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
      if (bankFilter && bankFilter !== "all") {
        query.Bank_Name = bankFilter;
      }
    }

    const userData = await PFormalData.find(query);

    if (!userData) {
      console.log("No data found");
      return res.status(404).json({ message: "No data found" });
    }

    console.log("Data retrieved");
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from pendingFormData with this API

export const fetchPartnerPendingData = async (req, res) => {
  try {
    const { Status } = req.params;
    let query = {};
    const { filter, bankFilter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            Upload_Date: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            Upload_Date: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            Upload_Date: {
              $gte: moment().startOf("day"), // Start of today
              $lte: moment().endOf("day"), // End of today
            },
          };
          break;
        case "from1to31":
          query = {
            Upload_Date: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
      if (bankFilter && bankFilter !== "all") {
        query.Bank_Name = bankFilter;
      }
    }

    const userData = await PPendingFormData.find({ Status, ...query });

    if (!userData) {
      console.log("No data found");
      return res.status(404).json({ message: "No data found" });
    }

    console.log("Data retrieved");
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from DisbursedData with this API

export const fetchPartnerDisbursedData = async (req, res) => {
  try {
    const { Status } = req.params;
    let query = {};
    const { filter, bankFilter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            Upload_Date: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            Upload_Date: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            Upload_Date: {
              $gte: moment().startOf("day"), // Start of today
              $lte: moment().endOf("day"), // End of today
            },
          };
          break;
        case "from1to31":
          query = {
            Upload_Date: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
      if (bankFilter && bankFilter !== "all") {
        query.Bank_Name = bankFilter;
      }
    }

    const userData = await PDisbursedData.find({ Status, ...query });

    if (!userData) {
      console.log("No data found");
      return res.status(404).json({ message: "No data found" });
    }

    console.log("Data retrieved");
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from RejectedData with this API

export const fetchPartnerRejectedData = async (req, res) => {
  try {
    const { Status } = req.params;
    let query = {};
    const { filter, bankFilter } = req.query;

    if (filter) {
      switch (filter) {
        case "all":
          break;
        case "last7days":
          query = {
            Upload_Date: { $gte: moment().subtract(7, "days").startOf("day") },
          };
          break;
        case "last30days":
          query = {
            Upload_Date: { $gte: moment().subtract(30, "days").startOf("day") },
          };
          break;
        case "lastday":
          query = {
            Upload_Date: {
              $gte: moment().startOf("day"), // Start of today
              $lte: moment().endOf("day"), // End of today
            },
          };
          break;
        case "from1to31":
          query = {
            Upload_Date: {
              $gte: moment().date(1).startOf("day"),
              $lte: moment().date(31).endOf("day"),
            },
          };
          break;
      }
      if (bankFilter && bankFilter !== "all") {
        query.Bank_Name = bankFilter;
      }
    }

    const userData = await PRejectedData.find({ Status, ...query });

    if (!userData) {
      console.log("No data found");
      return res.status(404).json({ message: "No data found" });
    }

    console.log("Data retrieved");
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Fetch Team Leaders details

export const partnerTeamLeaderDetails = async (req, res) => {
  try {
    // Fetch employee details based on the condition
    const employees = await PEmployee.find({
      userType: "Partner's Team Leader",
    });

    // Return the employee details
    return res.status(200).json({ employees });
  } catch (error) {
    console.error("Error fetching employee details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Delete Login Lead Data API
export const deletePartnerLoginLeadData = async (req, res) => {
  const id = req.params.id;
  try {
    // Perform deletion in your database using the provided ID
    await PFormalData.findByIdAndDelete(id);

    // Respond with a success message
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Pending Data API
export const deletePartnerPendingData = async (req, res) => {
  const id = req.params.id;
  try {
    // Perform deletion in your database using the provided ID
    await PPendingFormData.findByIdAndDelete(id);

    // Respond with a success message
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Disbursed Data API
export const deletePartnerDisbursedData = async (req, res) => {
  const id = req.params.id;
  try {
    // Perform deletion in your database using the provided ID
    await PDisbursedData.findByIdAndDelete(id);

    // Respond with a success message
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Rejected Data API
export const deletePartnerRejectedData = async (req, res) => {
  const id = req.params.id;
  try {
    // Perform deletion in your database using the provided ID
    await PRejectedData.findByIdAndDelete(id);

    // Respond with a success message
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
