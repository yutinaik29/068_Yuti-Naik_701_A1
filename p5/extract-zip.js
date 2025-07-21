const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

function extractZip(zipPath, extractTo) {
    fs.createReadStream(zipPath)
        .pipe(unzipper.Extract({ path: extractTo }))
        .on('close', () => {
            console.log(`Extraction complete to folder: ${extractTo}`);
        })
        .on('error', (err) => {
            console.error('Extraction error:', err);
        });
}

const zipFile = path.join(__dirname, 'my-folder.zip');
const outputFolder = path.join(__dirname, 'extracted-folder');

extractZip(zipFile, outputFolder);
