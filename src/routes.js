import { Router } from "express";

import containerController from "./containers/container.controller.js";
import zoneController from "./zones/zone.controller.js";

const router = Router();

router.get("/containers", containerController.getAll);
router.post("/containers", containerController.create);
router.patch("/containers/:id", containerController.updateStatus);

router.get("/zones", zoneController.getAll);
router.post("/zones/:id/assign", zoneController.assign);

export default router;
