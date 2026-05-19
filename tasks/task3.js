const fs = require("fs");
const chalk = require("chalk");

module.exports = (program) => {

//File Analyzer cli
program
    .command("analyze")
    .description("analyze the text file")
    .argument("<file>", "analyze the file")
    .action((file) => {
        console.log(chalk.yellowBright(`\n📂 Analyzing file: ${file}\n`));

        fs.readFile(file, "utf-8", (err, data) => {
            if(err){
                console.log(chalk.red("❌ Error reading file"));
                console.log(err.message)
            }
            else{
                //lines
                const lines = data.split("\n");

                //words
                const words = data.trim() ? data.trim().split(/\s+/).length : 0;

                //characters
                const chars = data.length;

                //empty lines
                const emptyLines = lines.filter(line => line.trim() === "").length;

                //file size in KB
                const sizeKB = (Buffer.byteLength(data)/1024).toFixed(2);

                console.log(chalk.green("\n📊 File Analysis Report"));
                console.log(`📄 Lines       : ${lines.length}`);
                console.log(`🔤 Words       : ${words}`);
                console.log(`📌 Characters  : ${chars}`);
                console.log(`🧹 Empty Lines : ${emptyLines}`);
                console.log(`💾 Size        : ${sizeKB} KB\n`);

            }
        })
    })
};