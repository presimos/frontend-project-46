#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/genDiff.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format));
  })
  .helpOption('-h, --help', 'display help for command');

program.parse();
