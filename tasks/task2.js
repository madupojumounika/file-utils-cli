const fs = require("fs");
const { Command } = require("commander");
const chalk = require("chalk");

const program = new Command();

program
  .name("cleaner")
  .description("CLI tool to perform tasks on files")
  .version("0.9.0");

// clean txt file
program
  .command("clean")
  .description("clean the txt file")
  .argument("<file>", "file to clean")
  .action((file) => {

    console.log(chalk.yellowBright(`\n📂 Reading file: ${file}\n`));

    fs.readFile(file, "utf-8", (err, data) => {

      if (err){
        console.log(chalk.red("❌ Error reading file"));
        console.log(chalk.red(err.message));
        return;
      }

      const cleanedData = data
        .split("\n")
        .map(line => line.trim().replace(/\s+/g, " "))
        .filter(line => line !== "")
        .join("\n");

      console.log(chalk.green("\n✨ Cleaned File Output:\n"));
      console.log(chalk.cyan(cleanedData));
    });
  });

program.parse();