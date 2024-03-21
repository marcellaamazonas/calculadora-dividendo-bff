import axios from "axios";
import { Request, Response } from "express";

export class BffController {
  public async calcularDividendos(req: Request, res: Response) {
    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}/calcular-dividendos`,
        req.body
      );

      res.render("index", { resultado: response.data.resultado, erros: null });
    } catch (error) {
      const { erros } = error.response.data;
      res.render("index", { resultado: null, erros });
    }
  }
}
