import { GitHubStarPayload } from "../../interfaces";

export class GitHubService {
  onStar(payload: GitHubStarPayload): string {
    const { action, repository, starred_at, sender } = payload;

    console.log(starred_at, typeof starred_at);
    if (starred_at) {
      return `🌟 ${sender.login} starred at ${starred_at} on ${repository.full_name}`;
    } else {
      return `❌ ${sender.login} removed star at ${repository.full_name}`;
    }
  }
}
