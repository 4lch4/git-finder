import Table from 'cli-table3'
import { GitRepo } from '.'

export interface Report {
  table: Table.Table
  repos: GitRepo[]
}
