import { Request, Response } from "express";

export class GithubController {
  constructor() {}

  webhookHandler = async (req: Request, res: Response) => {
    res.json("Github webhook received!");
  };
}
