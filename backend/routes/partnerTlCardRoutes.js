import express from "express";
import {
  PdeleteCardDisbursedData,
  PdeleteCardPendingData,
  PdeleteCardRejectedData,
  PfetchTeamLeaderCardDisbursedData,
  PfetchTeamLeaderCardPendingData,
  PfetchTeamLeaderCardRejectedData,
  PgetTeamLeaderCardFormAllData,
} from "../controllers/pTlCardControllers.js";

const partner_tl_card_routes = express.Router();

partner_tl_card_routes.get(
  "/p_card_fetchAlldata/:TL_Name?",
  PgetTeamLeaderCardFormAllData
);

partner_tl_card_routes.get(
  "/p_card_getpendingtldatas/:TL_Name?",
  PfetchTeamLeaderCardPendingData
);

partner_tl_card_routes.get(
  "/p_card_getdisbursedtldatas/:TL_Name?",
  PfetchTeamLeaderCardDisbursedData
);

partner_tl_card_routes.get(
  "/p_card_getrejectedtldatas/:TL_Name?",
  PfetchTeamLeaderCardRejectedData
);

partner_tl_card_routes.delete(
  "/p_card_deletetlPendingData/:id",
  PdeleteCardPendingData
);

partner_tl_card_routes.delete(
  "/p_card_deletetldisbursedData/:id",
  PdeleteCardDisbursedData
);

partner_tl_card_routes.delete(
  "/p_card_deletetlrejectedData/:id",
  PdeleteCardRejectedData
);

export default partner_tl_card_routes;
