import express from "express";
import {
  deletePartnerCardDisbursedData,
  deletePartnerCardLoginLeadData,
  deletePartnerCardPendingData,
  deletePartnerCardRejectedData,
  fetchCardPartnerDisbursedData,
  fetchCardPartnerPendingData,
  fetchCardPartnerRejectedData,
  getCardPartnerFormAllData,
} from "../controllers/partnerCardControllers.js";

const partner_card_routes = express.Router();

partner_card_routes.get("/fetchCardpartnerAlldata", getCardPartnerFormAllData);

partner_card_routes.get(
  "/getCardpendingpartnerdatas/:Status",
  fetchCardPartnerPendingData
);
partner_card_routes.get(
  "/getCarddisbursedpartnerdatas/:Status",
  fetchCardPartnerDisbursedData
);
partner_card_routes.get(
  "/getCardrejectedpartnerdatas/:Status",
  fetchCardPartnerRejectedData
);

partner_card_routes.delete(
  "/deleteCardpartnerLoginLeadData/:id",
  deletePartnerCardLoginLeadData
);
partner_card_routes.delete(
  "/deleteCardpartnerPendingData/:id",
  deletePartnerCardPendingData
);
partner_card_routes.delete(
  "/deleteCardpartnerdisbursedData/:id",
  deletePartnerCardDisbursedData
);
partner_card_routes.delete(
  "/deleteCardpartnerrejectedData/:id",
  deletePartnerCardRejectedData
);

export default partner_card_routes;
