import moment from "moment";
import {
  PCardDisbursedData,
  PCardFormAlData,
  PCardPendingFormData,
  PCardRejectedData,
} from "../models/partnerCardModels.js";

// fetch all the data from CardFormAlData with this API

export const getCardPartnerFormAllData = async (req, res) => {
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

    const userData = await PCardFormAlData.find(query);

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

// fetch all the data from CardPendingFormData with this API

export const fetchCardPartnerPendingData = async (req, res) => {
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

    const userData = await PCardPendingFormData.find({ Status, ...query });

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

// fetch all the data from CardDisbursedData with this API

export const fetchCardPartnerDisbursedData = async (req, res) => {
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

    const userData = await PCardDisbursedData.find({ Status, ...query });

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

// fetch all the data from CardRejectedData with this API

export const fetchCardPartnerRejectedData = async (req, res) => {
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

    const userData = await PCardRejectedData.find({ Status, ...query });

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

// Delete Login Lead Card Data API
export const deletePartnerCardLoginLeadData = async (req, res) => {
  const id = req.params.id;
  try {
    // Perform deletion in your database using the provided ID
    await PCardFormAlData.findByIdAndDelete(id);

    // Respond with a success message
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Pending Card Data API
export const deletePartnerCardPendingData = async (req, res) => {
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

// Delete Disbursed Card  Data API
export const deletePartnerCardDisbursedData = async (req, res) => {
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

// Delete Rejected Card Data API
export const deletePartnerCardRejectedData = async (req, res) => {
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
