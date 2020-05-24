const fs = require('fs');
const path = require('path');
 
const pathToFolder = path.resolve(process.argv[2]);
console.log(path.resolve(process.argv[2]))


const files = [];
const dirs = [];
const result = {
    files: files,
    dirs: dirs
}

const fileRegExp = /^[^.]+[.][^.]+$/;
 
async function scanFolder(pathToFolder) {

    const elements = await new Promise((resolve, reject) => {
        fs.readdir(pathToFolder, (err, data) => {
            resolve(data);
        })
    })

    for (element of elements) {
        if (element.search(fileRegExp) == 0) {
            files.push(path.resolve(pathToFolder, element));
        } else {
            dirs.push(path.resolve(pathToFolder, element));
            await scanFolder(path.resolve(pathToFolder, element));
        }
    }

    return result;
}

scanFolder(pathToFolder).then(console.log);

