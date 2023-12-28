import express from "express";
import employeeRoutes from "./employeeRoutes.js";
import customerRoutes from "./customerRoutes.js";
import TeamLeaderRoutes from "./teamLeaderRoutes.js";
import adminRoutes from "./adminRoutes.js";
import card_routes from "./employeeCardRoutes.js";
import tl_card_routes from "./teamLeaderCardRoutes.js";
import admin_card_routes from "./adminCardRoutes.js";
import partnerRoutes from "./partnerRoutes.js";
import partner_card_routes from "./partnerCardRoutes.js";
import partner_employee_routes from "./partnerEmployeeRoutes.js";
import partner_employee_card_routes from "./partnerEmployeeCardRoutes.js";
import partner_tl_routes from "./partnerTlRoutes.js";
import partner_tl_card_routes from "./partnerTlCardRoutes.js";

const router = express.Router();

router.use("/", employeeRoutes);
router.use("/", customerRoutes);
router.use("/", TeamLeaderRoutes);
router.use("/", adminRoutes);
router.use("/", card_routes);
router.use("/", tl_card_routes);
router.use("/", admin_card_routes);
router.use("/", partnerRoutes);
router.use("/", partner_card_routes);
router.use("/", partner_employee_routes);
router.use("/", partner_employee_card_routes);
router.use("/", partner_tl_routes);
router.use("/", partner_tl_card_routes);

export default router;
