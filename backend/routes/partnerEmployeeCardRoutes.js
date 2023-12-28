import express from "express";
import {
  PdeleteCardPendingData,
  PemployeeCardFormApply,
  PfetchCardApprovedData,
  PfetchCardFormAlData,
  PfetchCardPendingData,
  PfetchCardRejectedData,
  PsendCardApprovedData,
  PsendCardRejectedData,
} from "../controllers/pEmployeeCardControllers.js";

const partner_employee_card_routes = express.Router();

partner_employee_card_routes.post("/p_card_all_data", PemployeeCardFormApply);

// Fetch data to Login Leads with this API

partner_employee_card_routes.get(
  "/p_card_pendingdata/:email?",
  PfetchCardFormAlData
);

// Fetch data to pending with this API
partner_employee_card_routes.get(
  "/p_card_getpendingdatas/:email?",
  PfetchCardPendingData
);

partner_employee_card_routes.delete(
  "/p_card_deletePendingData/:id",
  PdeleteCardPendingData
);

// // Send Approved data to database With this API
partner_employee_card_routes.post(
  "/p_card_submit-approved-data",
  PsendCardApprovedData
);

// // Fetch Approved data to disbursed_data table with this API
partner_employee_card_routes.get(
  "/p_card_approved-data/:email?",
  PfetchCardApprovedData
);

// // Send Rejected data to database With this API
partner_employee_card_routes.post(
  "/p_card_submit-rejct-data",
  PsendCardRejectedData
);

// // Fetch Rejected data to rejected_data table with this API
partner_employee_card_routes.get(
  "/p_card_rejected-data/:email?",
  PfetchCardRejectedData
);

export default partner_employee_card_routes;
