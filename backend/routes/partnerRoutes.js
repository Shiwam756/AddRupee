import express from "express";
import {
  PartnerFormAllData,
  approvePartnerRequest,
  deletePartnerDisbursedData,
  deletePartnerLoginLeadData,
  deletePartnerPendingData,
  deletePartnerRejectedData,
  deletePartnerRequest,
  fetchPartnerDisbursedData,
  fetchPartnerPendingData,
  fetchPartnerRejectedData,
  getPartnerFormAllData,
  getPartnerFormallData,
  partnerTeamLeaderDetails,
  rejectPartnerRequest,
} from "../controllers/partnerControllers.js";

const partnerRoutes = express.Router();

// send data with this API
partnerRoutes.post("/sendPartnerdata", PartnerFormAllData);

// get data with this API
partnerRoutes.get("/getPartnerdata", getPartnerFormallData);

// approved partner with this API
partnerRoutes.post("/approve-partner/:requestId", approvePartnerRequest);

// Reject partner with this API
partnerRoutes.post("/reject-partner/:requestId", rejectPartnerRequest);

// delete partner with this API
partnerRoutes.post("/delete-partner/:requestId", deletePartnerRequest);

partnerRoutes.get("/fetchpartnerAlldata", getPartnerFormAllData);
partnerRoutes.get("/getpendingpartnerdatas/:Status", fetchPartnerPendingData);
partnerRoutes.get(
  "/getdisbursedpartnerdatas/:Status",
  fetchPartnerDisbursedData
);
partnerRoutes.get("/getrejectedpartnerdatas/:Status", fetchPartnerRejectedData);
partnerRoutes.get("/getpartnerteamleaderdetails", partnerTeamLeaderDetails);

partnerRoutes.delete(
  "/deletepartnerLoginLeadData/:id",
  deletePartnerLoginLeadData
);
partnerRoutes.delete("/deletepartnerPendingData/:id", deletePartnerPendingData);
partnerRoutes.delete(
  "/deletepartnerdisbursedData/:id",
  deletePartnerDisbursedData
);
partnerRoutes.delete(
  "/deletepartnerrejectedData/:id",
  deletePartnerRejectedData
);

export default partnerRoutes;
