import axios from "axios";
import express from "express";
// import { CalculadoraController } from "../controllers/CalculadoraController";

const router = express.Router();

// const calculadoraController = new CalculadoraController(calculadoraService);

router.post("/calcular-dividendos", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/calcular-dividendos",
      req.body
    );
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default router;
