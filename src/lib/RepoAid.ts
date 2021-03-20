import simpleGit, { SimpleGit, StatusResult } from 'simple-git'

/**
 * A utility class for interacting with Git repositories.
 */
export class RepoAid {
  private client: SimpleGit

  constructor(path: string) {
    this.client = simpleGit({
      binary: 'git',
      baseDir: path
    })
  }

  public async getStatus() {
    return this.client.status()
  }

  public isInSync(status: StatusResult): boolean {
    let modified =
      status.conflicted.length +
      status.created.length +
      status.deleted.length +
      status.modified.length +
      status.conflicted.length +
      status.renamed.length +
      status.not_added.length

    return modified === 0
  }
}
