import express from "express";
import {
  PdeleteDisbursedData,
  PdeletePendingData,
  PdeleteRejectedData,
  PfetchTLPendingData,
  PfetchTlDisbursedData,
  PfetchTlRejectedData,
  PgetTeamFormAllData,
  PteamDetails,
} from "../controllers/pTlControllers.js";

const partner_tl_routes = express.Router();

partner_tl_routes.get("/p_fetchAlldata/:TL_Name?", PgetTeamFormAllData);
partner_tl_routes.get("/p_getpendingtldatas/:TL_Name?", PfetchTLPendingData);
partner_tl_routes.get(
  "/p_getdisbursedtldatas/:TL_Name?",
  PfetchTlDisbursedData
);
partner_tl_routes.get("/p_getrejectedtldatas/:TL_Name?", PfetchTlRejectedData);
partner_tl_routes.get("/p_getteamdetails/:TL_Name?", PteamDetails);

partner_tl_routes.delete("/p_deletetlPendingData/:id", PdeletePendingData);
partner_tl_routes.delete("/p_deletetldisbursedData/:id", PdeleteDisbursedData);
partner_tl_routes.delete("/p_deletetlrejectedData/:id", PdeleteRejectedData);

export default partner_tl_routes;
