const fs = require("fs");
const chalk = require("chalk");

module.exports = (program) => {

// count words
program
  .command("count_words")
  .description("count the number of words in txt file")
  .argument("<file>", "file to count words")
  .action((file) => {

    console.log(chalk.yellowBright(`\n📂 Reading file: ${file}\n`));

    fs.readFile(file, "utf-8", (err, data) => {

      if (err){
        console.log(chalk.red("❌ Error reading file"));
        console.log(chalk.red(err.message));
      } else{

        const words = data.trim()
         ? data.trim().split(/\s+/).length
        : 0;

        console.log(chalk.green(`✅ There are ${words} words in ${file}\n`));
      }
    });
  });

// count lines
program
  .command("count_lines")
  .description("count the number of lines in a file")
  .argument("<file>", "file to count lines")
  .action((file) => {

    console.log(chalk.yellowBright(`\n📂 Reading file: ${file}\n`));

    fs.readFile(file, "utf8", (err, data) => {

      if (err){
        console.log(chalk.red("❌ Error reading file"));
        console.log(chalk.red(err.message));
      } else{

        const lines = data.trim() 
        ? data.split("\n").length
        : 0;

        console.log(chalk.green(`✅ There are ${lines} lines in ${file}\n`));
      }
    });
  });

// count characters
program
  .command("count_chars")
  .description("count the number of characters in a file")
  .argument("<file>", "file to count characters")
  .action((file) => {

    console.log(chalk.yellowBright(`\n📂 Reading file: ${file}\n`));

    fs.readFile(file, "utf8", (err, data) => {

      if (err){
        console.log(chalk.red("❌ Error reading file"));
        console.log(chalk.red(err.message));
      } else{

        const chars = data.length;

        console.log(
          chalk.green(`✅ There are ${chars} characters in ${file}\n`));
      }
    });
  });

}
