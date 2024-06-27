import { Request, Response } from "express";
import { GitHubService } from "../services/github.service";

export class GithubController {
  constructor(
    private readonly gitHubService: GitHubService = new GitHubService()
  ) {}

  webhookHandler = async (req: Request, res: Response) => {
    const githubEvent = req.headers["x-github-event"] ?? "unknown";
    const signature = req.headers["x-hub-signature-256"] ?? "unknown";
    const payload = req.body;
    let message: string = "";

    switch (githubEvent) {
      case "star":
        message = this.gitHubService.onStar(payload);

      case "issues":
        // this.githubService.onIssue(payload);
        break;
      default:
        message = `Event ${githubEvent} is not supported`;
    }

    console.log({ message });

    res.status(202).send("Webhook received");
  };
}
