import axios from "axios";
import express from "express";
// import { CalculadoraController } from "../controllers/CalculadoraController";

const router = express.Router();

router.get("/calcular-dividendos", (req, res) => {
  res.render("index", { resultado: null, erros: null });
});

router.post("/calcular-dividendos", async (req, res) => {
  try {
    const {
      data: { resultado },
    } = await axios.post("http://localhost:3000/calcular-dividendos", req.body);

    res.render("index", { resultado, erros: null });
  } catch (error) {
    const {
      response: {
        data: { erros },
      },
    } = error;
    res.render("index", { resultado: null, erros });
  }
});

export default router;
