import { Command } from 'commander'
import genraterMd from './script/genrater-md.js'
import copyDemo from './script/copy-demo.js'

const program = new Command()

program
  .command('coyp:md')
  .description('copy ui readme md')
  .action(genraterMd)

program
  .command('copy:demo')
  .description('copy demo')
  .action(copyDemo)

program.parse()