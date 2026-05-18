#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();

const task1 = require("./tasks/task1");
const task2 = require("./tasks/task2");
const task3 = require("./tasks/task3");
const task4 = require("./tasks/task4");

program
  .name("file-utils")
  .description("CLI tool for file operations")
  .version("1.0.0");

task1(program);
task2(program);
task3(program);
task4(program);

program.parse();