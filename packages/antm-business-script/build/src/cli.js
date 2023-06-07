import { Command } from 'commander';
import genraterMd from './script/genrater-md.js';
import copyDemo from './script/copy-demo.js';
import genraterNewComponent from './script/genrater-new-component.js';
const program = new Command();
program
    .command('coyp:md')
    .description('copy ui readme md')
    .action(genraterMd);
program
    .command('copy:demo')
    .description('copy demo')
    .action(copyDemo);
program
    .command('create:component')
    .description('genrater new component')
    .action(genraterNewComponent);
program.parse();
