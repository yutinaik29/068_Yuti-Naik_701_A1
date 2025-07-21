const fs = require('fs').promises;

async function fileOperations() {
  const filename = 'example.txt';

  try {
    // 1. Write data
    await fs.writeFile(filename, 'Hello, this is the first line.\n');
    console.log('File written.');

    // 2. Append data
    await fs.appendFile(filename, 'This line is appended.\n');
    console.log('Data appended.');

    // 3. Read data
    const data = await fs.readFile(filename, 'utf-8');
    console.log('File contents:\n', data);

    // 4. Rename 
    const newFilename = 'example-renamed.txt';
    await fs.rename(filename, newFilename);
    console.log(`File renamed to ${newFilename}`);

    // 5. Delete 
    await fs.unlink(newFilename);
    console.log('File deleted.');
  } catch (err) {
    console.error('Error:', err);
  }
}

fileOperations();
