const fs = require('fs');

const file = "app/data/data.json";

const writeFile = (json) => {
    fs.writeFile(file, JSON.stringify(json), (err) => {
        if (err) throw err
        console.log('The file has been saved!')
    });
}

module.exports = {
    writeFile
};