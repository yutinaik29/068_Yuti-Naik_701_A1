const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);


const filePath = './test.txt';

async function deleteFile() {
  try {
    await unlinkAsync(filePath);
    console.log(`${filePath} was deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting file: ${err.message}`);
  }
}

deleteFile();


