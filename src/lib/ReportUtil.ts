import Table from 'cli-table3'
import dayjs from 'dayjs'
import { ensureFile, writeFile } from 'fs-extra'
import jsExport from 'jsonexport'
import { dirname, join } from 'path'
import { RepoAid } from '.'
import { GitRepo, Report } from '../interfaces'

/** A utility class for generating reports. */
export class ReportUtil {
  /** A collection of paths to git repositories. */
  gitDirs: string[]

  /** Where to store the generated report. */
  outDir: string

  private report?: Report

  constructor(gitDirs: string[], outDir: string) {
    this.gitDirs = gitDirs
    this.outDir = outDir
  }

  private getReportFilename(): string {
    return `${dayjs().format('YYYY.MM.DD_HH.mm')}-git-report.csv`
  }

  /**
   * Generates a "report" of the sync status of all the stored gitRepos. The
   * report is JSON and returned as such to be used otherwise throughout the
   * application.
   *
   * @returns The generated results.
   */
  public async generate(): Promise<Report> {
    try {
      const repos: GitRepo[] = []
      const table = new Table({
        head: ['Name', 'In Sync'],
        colAligns: ['left', 'center']
      })

      for (const gitDir of this.gitDirs) {
        const repoDir = dirname(gitDir)
        const rAid = new RepoAid(repoDir)
        const repoStatus = await rAid.getStatus()
        const repoIsInSync = rAid.isInSync(repoStatus)
        const repoName = repoDir.substring(repoDir.lastIndexOf('/') + 1)
        table.push([{ content: repoName }, { content: repoIsInSync }])

        repos.push({ name: repoName, path: repoDir, inSync: repoIsInSync })
      }

      this.report = {
        table,
        repos
      }

      return this.report
    } catch (err) {
      return err
    }
  }

  public async export(): Promise<string> {
    try {
      if (this.report) {
        const reportPath = join(this.outDir, this.getReportFilename())

        const csvContent = await jsExport(this.report.repos)

        await ensureFile(reportPath)

        await writeFile(reportPath, csvContent)

        return reportPath
      } else {
        throw '#generate has not been called yet, so there is no report to export.'
      }
    } catch (err) {
      return err
    }
  }
}
