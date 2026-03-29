import { Router } from "express";
import { submitLead } from "../controllers/leadController";

const router = Router();

router.post("/submit-lead", submitLead);

export default router;
