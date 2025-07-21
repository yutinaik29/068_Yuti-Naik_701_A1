const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

function zipDirectory(sourceDir, outPath) {
    const output = fs.createWriteStream(outPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    // Listen for archive completion
    output.on('close', function () {
        console.log(`✅ Archive created successfully: ${outPath}`);
        console.log(`📦 Total bytes: ${archive.pointer()}`);
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);
    archive.directory(sourceDir, false); // false = no folder nesting in zip
    archive.finalize();
}

// Replace these with your desired folder and output paths
const sourceFolder = path.join(__dirname, 'my-folder');
const outputZip = path.join(__dirname, 'my-folder.zip');

zipDirectory(sourceFolder, outputZip);
