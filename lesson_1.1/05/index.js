const fs = require("fs");
const path = require("path");

let data = require("./main");

console.log(process.execPath);

let pathFile = path.join(__dirname, "./db/text.txt");

fs.readFile(pathFile, "utf-8", (err, data) => {
    if (err) throw error;
    console.log(data);
  });
// let new_text = {
//   name: "mike",
// };
// fs.writeFile(pathFile, JSON.stringify(new_text), 'utf8',(err) => {
//   if (err) {
//     console.log(err);
//   }

// });
// // console.log(text);

// let second_text = ", append text!";
// fs.appendFile(pathFile, second_text, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });


const fsPromises = fs.promises;

async function readFile() {
    try {
        const data = await fsPromises.readFile(pathFile, "utf-8"); 
        console.log(data); 
      } catch (error) {
        console.log(error)
      }
}

readFile();

async function writeFile() {
    const data = "Hello, I'm using the new fs promises API";

try {
  await fsPromises.writeFile('file1.txt', data); 
} catch (error) {
  console.log(error)
}
}

writeFile();