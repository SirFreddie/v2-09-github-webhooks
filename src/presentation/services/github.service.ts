import { GitHubStarPayload } from "../../interfaces";

export class GitHubService {
  onStar(payload: GitHubStarPayload): string {
    const { action, repository, starred_at, sender } = payload;

    if (starred_at) {
      return `🌟 ${sender.login} starred at ${starred_at} on ${repository.full_name}`;
    }
    return `❌ ${sender.login} removed star at ${repository.full_name}`;
  }
}
