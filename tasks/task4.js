const fs = require("fs");
const chalk = require("chalk");

module.exports = (program) => {

//file to search 
program
    .command("search")
    .description("search word from text file")
    .argument("<keyword>", "word to search")
    .argument("<file>", "file to search")
    .action((keyword, file) => {
        
        console.log(chalk.yellowBright(`\n🔍 Searching "${keyword}" in ${file}\n`));

        fs.readFile(file, "utf-8", (err, data) => {
            if(err){
                console.log(chalk.red("❌ Error reading file"));
                console.log(err.message)
            }
            else{
                const lines = data.split("\n");
                
                let matches = 0;

                lines.forEach((line, index) => {
                    if(line.toLowerCase().includes(keyword.toLowerCase())){
                        matches++;

                        console.log(chalk.cyan(`📄 Line ${index + 1}: ${line}`));
                    }
                        
                    })
                    if (matches === 0) {
                        console.log(chalk.red("❌ No matches found\n"));
                    } else {
                        console.log(chalk.green(`\n✅ Found ${matches} match(es)\n`));
                    }    
            }
        })
    })


}