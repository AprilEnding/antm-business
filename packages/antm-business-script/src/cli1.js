import { Command } from 'commander'
import genraterMd from './script/genrater-md.js'

try {
  const program = new Command()

  program
    .command('coyp')
    .description('copy ui readme md')
    .action(genraterMd)

  program.parse()
} catch (error) {
  console.log(error);
}