import expres from "express";
import { envs } from "./config";
import { GithubController } from "./presentation/github/controller";

(() => {
  main();
})();

function main() {
  const app = expres();

  const controller = new GithubController();

  app.post("/api/github", controller.webhookHandler);

  app.get("/api/ping", (req, res) => {
    res.json({ message: "pong" });
  });

  app.listen(envs.PORT, () => {
    console.log(`Server is running on port ${envs.PORT}`);
  });
}
