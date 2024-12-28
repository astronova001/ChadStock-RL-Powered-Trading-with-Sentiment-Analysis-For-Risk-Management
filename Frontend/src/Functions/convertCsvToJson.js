const fs = require('fs');
const path = require('src\data\stockData.json');    

const csvFilePath = path.join(__dirname, 'stockData.csv');
const jsonFilePath = path.join(__dirname, 'stockData.json');

const csv = fs.readFileSync(csvFilePath, 'utf8');
const lines = csv.trim().split('\n');
const headers = lines[0].split('\t');

const jsonData = { data: [] };

for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split('\t');
    const dateParts = currentLine[0].split('-');
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    const closePrice = parseFloat(currentLine[4]);

    if (!isNaN(closePrice)) {
        jsonData.data.push({
            x: formattedDate,
            y: closePrice
        });
    }
}

fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 4));
console.log('CSV data has been converted to JSON successfully.');