export interface GitRepo {
  /** The name of the repository. */
  name: string

  /** The absolute path to the repository. */
  path: string

  /** Whether or not there are any non-pushed changes. */
  inSync: boolean
}
