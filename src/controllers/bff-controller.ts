import axios from "axios";
import { Request, Response } from "express";

export class BffController {
  public async calcularDividendos(req: Request, res: Response) {
    try {
      const {
        data: { resultado },
      } = await axios.post(
        "http://localhost:3000/calcular-dividendos",
        req.body
      );

      res.render("index", { resultado, erros: null });
    } catch (error) {
      const {
        response: {
          data: { erros },
        },
      } = error;
      res.render("index", { resultado: null, erros });
    }
  }
}
