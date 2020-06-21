const fs = require('fs');
const readline = require('readline');
const path = require('path');
const { Stream } = require('stream');

const {create100MbNumbers} = require('./numbers-creater.js');
const {handleAllChunks} = require('./chunks-handler.js');


const NUMBERS_FILE_NAME = 'numbers.txt';
const delimeter = '\n';
const fileSep = path.sep; 
const CHUNKS_FOLDER = 'chunks'; 


create100MbNumbers(NUMBERS_FILE_NAME, delimeter);

if (fs.existsSync(CHUNKS_FOLDER)) {
    fs.rmdirSync(CHUNKS_FOLDER, {recursive: true});
}

fs.mkdirSync(CHUNKS_FOLDER);

let lines = [];
let chunkNumbers = 0;

const rl = readline.createInterface({
    input: fs.createReadStream(NUMBERS_FILE_NAME),
    output: new Stream(),
    terminal: false
});

rl.on('line', function(line) {
    lines.push(parseInt(line));

    if (lines.length >= 40000) {
        chunkNumbers++;

        if (chunkNumbers%10 == 0) {
            console.log(`${chunkNumbers} files created...`);
        }

        const CHUNK_FILE_NAME = `.${fileSep + CHUNKS_FOLDER + fileSep + chunkNumbers}_${NUMBERS_FILE_NAME}`;

        lines.sort((x,y) => x - y);

        let linesToString = lines.toString();
        
        lines = [];

        linesToString = linesToString.replace(new RegExp(',', 'g'), '\n');

        fs.appendFileSync(CHUNK_FILE_NAME, linesToString);
    }
}).on('close', () => {
    console.log(`${chunkNumbers} files created total.`);
    handleAllChunks(chunkNumbers, fileSep, CHUNKS_FOLDER, NUMBERS_FILE_NAME);
})