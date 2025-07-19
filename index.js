const fs = require('fs');

// Do not change this function name and parameters
function writeFile(fileName, fileContent) {
    // Check if file already exists using fs.existsSync
    if (fs.existsSync(fileName)) {
        console.log(`${fileName} already exists. Skipping write operation`);
    } else {
        // Write the content to file using fs.writeFileSync
        fs.writeFileSync(fileName, fileContent);
        console.log(`File ${fileName} created and data written successfully!`);
    }
}

writeFile('myfile.txt', 'Newton School');
