import express from "express";
import {
  PAddleadsAlldata,
  PdeletePendingData,
  PemailVerification,
  PemployeeFormAllData,
  PfetchApprovedData,
  PfetchPendingData,
  PfetchRejectedData,
  PforgotPassword,
  PgetUserData,
  PloginEmployee,
  PlogoutEmployee,
  PregisterEmployee,
  PresetPassword,
  PsendApprovedData,
  PsendRejectedData,
  PverifyUser,
} from "../controllers/pEmployeeControllers.js";

const partner_employee_routes = express.Router();

partner_employee_routes.post("/p_emp_register", PregisterEmployee);
partner_employee_routes.post("/p_forgot_password", PforgotPassword);
partner_employee_routes.post("/p_reset_password/:id/:token", PresetPassword);
partner_employee_routes.get("/p-email-verification/:code", PemailVerification);

partner_employee_routes.post("/p_emp_login", PloginEmployee);
partner_employee_routes.get("/p_emp_logout", PlogoutEmployee);
partner_employee_routes.get("/p_get_user_data", PverifyUser, PgetUserData);

partner_employee_routes.post("/p_all_data", PemployeeFormAllData);

// Fetch data to pending with this API

partner_employee_routes.get("/p_pendingdata/:email?", PAddleadsAlldata);
partner_employee_routes.get("/p_getpendingdatas/:email?", PfetchPendingData);
partner_employee_routes.delete("/p_deletePendingData/:id", PdeletePendingData);

// // Send Approved data to database With this API
partner_employee_routes.post("/p_submit-approved-data", PsendApprovedData);

// // Fetch Approved data to disbursed_data table with this API
partner_employee_routes.get("/p_approved-data/:email?", PfetchApprovedData);

// // Send Rejected data to database With this API
partner_employee_routes.post("/p_submit-rejct-data", PsendRejectedData);

// // Fetch Rejected data to rejected_data table with this API
partner_employee_routes.get("/p_rejected-data/:email?", PfetchRejectedData);

export default partner_employee_routes;
