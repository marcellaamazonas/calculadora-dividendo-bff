import axios from "axios";
import express from "express";
import { BffController } from "../controllers/bff-controller";

const router = express.Router();

const bffController = new BffController();

router.get("/calcular-dividendos", (req, res) => {
  res.render("index", { resultado: null, erros: null });
});

router.post("/calcular-dividendos", async (req, res) =>
  bffController.calcularDividendos(req, res)
);

export default router;
