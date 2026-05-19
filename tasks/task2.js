const fs = require("fs");
const chalk = require("chalk");

module.exports = (program) => {

// clean txt file
program
  .command("clean")
  .description("clean the txt file")
  .argument("<file>", "file to clean")
  .action((file) => {

    console.log(chalk.yellowBright(`\n📂 Reading file: ${file}`));

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
      console.log("\n");
    });
  });

};
