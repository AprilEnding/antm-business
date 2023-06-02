import { Command } from 'commander'
import genraterMd from './script/genrater-md.js'

const program = new Command()

program
  .command('coyp')
  .description('copy ui readme md')
  .action(genraterMd)

program.parse()