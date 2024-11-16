const fs = require('fs')

// reading a file text

// const readText = fs.readFileSync("./text/read.txt");  // get buffer

const readText = fs.readFileSync("./text/read.txt", "utf-8");  // for encoding use "utf-8"

// console.log(readText);

// writing a text
const writeFile = fs.writeFileSync("./text/write.txt", readText + "This is written text")
console.log(writeFile);