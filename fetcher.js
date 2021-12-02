const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const file = args[1];

request(url, (error, response, body) => {
    if (error) {
        console.log(error);
    }
   fs.writeFile(file, body, (error) => {
        if (error) {
            throw error;
        }
        console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
    });
});

