import { expect, test } from '@oclif/test'

import cmd = require('../src')

describe('@4lch4/git-finder', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('creates a local report', ctx => {
    expect(ctx.stdout).to.contain('│ git-finder │')
  })
})
