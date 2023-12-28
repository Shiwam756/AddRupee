import {
  PCardDisbursedData,
  PCardFormAlData,
  PCardPendingFormData,
  PCardRejectedData,
} from "../models/partnerCardModels.js";

// import { config } from "dotenv";
import moment from "moment";

// config();

// fetch all the data from CardFormAlData with this API

export const PgetTeamLeaderCardFormAllData = async (req, res) => {
  try {
    let query = {};
    const { filter, bankFilter } = req.query;

    // If TL_Name is provided in the request parameters
    const { TL_Name } = req.params;

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

    // If TL_Name is provided, fetch data based on the TL_Name
    const userData = await PCardFormAlData.find({ TL_Name, ...query });

    if (!userData) {
      console.log("No data found for the provided TL_Name");
      return res
        .status(404)
        .json({ message: "No data found for the provided TL_Name" });
    }

    console.log("Data retrieved for the provided TL_Name");
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from CardPendingFormData with this API

export const PfetchTeamLeaderCardPendingData = async (req, res) => {
  try {
    let query = {};
    // If TL_Name is provided in the request parameters
    const { TL_Name } = req.params;
    const { Status, filter, bankFilter } = req.query;
    console.log("Pending Status ", Status);

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

    let userData;

    if (Status) {
      userData = await PCardPendingFormData.find({ TL_Name, Status, ...query });
    } else {
      userData = await PCardPendingFormData.find({ TL_Name, ...query });
    }

    if (!userData) {
      console.log("No data found for the provided email");
      return res
        .status(404)
        .json({ message: "No data found for the provided email" });
    }

    console.log("Data retrieved for the provided email");
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from CardDisbursedData with this API

export const PfetchTeamLeaderCardDisbursedData = async (req, res) => {
  try {
    let query = {};
    // If TL_Name is provided in the request parameters
    const { TL_Name } = req.params;
    const { Status, filter, bankFilter } = req.query;
    console.log("Disbursed Status ", Status);

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

    let userData;

    if (Status) {
      userData = await PCardDisbursedData.find({ TL_Name, Status, ...query });
    } else {
      userData = await PCardDisbursedData.find({ TL_Name, ...query });
    }

    if (!userData) {
      console.log("No data found for the provided email");
      return res
        .status(404)
        .json({ message: "No data found for the provided email" });
    }

    console.log("Data retrieved for the provided email");
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// fetch all the data from CardRejectedData with this API

export const PfetchTeamLeaderCardRejectedData = async (req, res) => {
  try {
    let query = {};
    // If TL_Name is provided in the request parameters
    const { TL_Name } = req.params;
    const { Status, filter, bankFilter } = req.query;
    console.log("Rejected Status", Status);

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

    let userData;

    if (Status) {
      userData = await PCardRejectedData.find({ TL_Name, Status, ...query });
    } else {
      userData = await PCardRejectedData.find({ TL_Name, ...query });
    }

    if (!userData) {
      console.log("No data found for the provided email");
      return res
        .status(404)
        .json({ message: "No data found for the provided email" });
    }

    console.log("Data retrieved for the provided email");
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Pending Data API
export const PdeleteCardPendingData = async (req, res) => {
  const id = req.params.id;
  try {
    // Perform deletion in your database using the provided ID
    await PCardPendingFormData.findByIdAndDelete(id);

    // Respond with a success message
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Disbursed Data API
export const PdeleteCardDisbursedData = async (req, res) => {
  const id = req.params.id;
  try {
    // Perform deletion in your database using the provided ID
    await PCardDisbursedData.findByIdAndDelete(id);

    // Respond with a success message
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Rejected Data API
export const PdeleteCardRejectedData = async (req, res) => {
  const id = req.params.id;
  try {
    // Perform deletion in your database using the provided ID
    await PCardRejectedData.findByIdAndDelete(id);

    // Respond with a success message
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
