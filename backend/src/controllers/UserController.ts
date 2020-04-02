import { Request, Response } from "express";

import EmailService from "../services/EmailService";

const users = [
  { name: "Luiz", email: "luiz@email.com" },
  { name: "Gustavo", email: "gustavo@email.com" }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: users[0],
      message: {
        subject: "Bem-Vindo(a) ao Sistema",
        body: "Seja bem-vindo(a)"
      }
    });

    return res.json({ status: "ok" });
  }
};
