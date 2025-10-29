const fs = require('fs');
const read = fs.createReadStream(`${__dirname}/data.txt`);

read.on('data', (chunk)=>{
    console.log(chunk)
});

console.log('hello Now I am reading text from file');