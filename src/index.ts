import { Command, flags } from '@oclif/command'
import globby from 'globby'
import ora from 'ora'
import { join } from 'path'
import { ReportUtil } from './lib'

class GitFinder extends Command {
  static description =
    'Find git repositories, determine if they are up-to-date, and generate a report of the info.'

  static flags = {
    version: flags.version({ char: 'v' }),

    help: flags.help({ char: 'h' }),

    outDir: flags.string({
      char: 'o',
      description:
        'The directory where you would like to store the CSV report.',
      required: false,
      default: join(process.cwd(), 'reports')
    })
  }

  async run() {
    const { flags } = this.parse(GitFinder)
    const spinner = ora()

    spinner.start(`Searching for git repos and generating a report...`)

    const gitDirs = await globby('**/.git', {
      dot: true,
      onlyDirectories: true,
      absolute: true
    })

    const rUtil = new ReportUtil(gitDirs, join(flags.outDir))

    const report = await rUtil.generate()
    await rUtil.export()

    spinner.succeed('Execution complete!')

    // spinner.text = `Finished searching ${gitDirs.length} git repos...`

    this.log(report.table.toString())
  }
}

export = GitFinder
