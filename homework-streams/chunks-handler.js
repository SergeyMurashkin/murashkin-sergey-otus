const readline = require('readline');
const fs = require('fs');
const { Stream } = require('stream');

function handleAllChunks(chunkNumber, fileSep, chunkFolder, numbersFileName) {

    const rlList = [];

    let handledLineCount = 0

    for (let i=1; i<=chunkNumber; i++ ){
        let CHUNK_FILE_NAME = `.${fileSep + chunkFolder + fileSep + i}_${numbersFileName}`;

        let lr = readline.createInterface({
            input: fs.createReadStream(CHUNK_FILE_NAME),
            output: new Stream()
        });

        rlList.push({
            rl: lr,
            index: i,
            canRemove: false,
            buffer: []
        })

    }

    let flag = false;
    let RESULT_FILE_NAME = 'result.txt';

    if (fs.existsSync(RESULT_FILE_NAME)) {
        fs.unlinkSync(RESULT_FILE_NAME);
    }

    let rlWorkCount = chunkNumber;

    rlList.forEach((element, index, array) => {

        element.rl.on('close', () => {
            element.canRemove = true;
            rlWorkCount--;

            if (rlWorkCount == 0) {
                handleLast();
            }
        })
        .on('pause', () => {
            if (rlList.every(el => el.buffer.length > 0) ) {
                handle();
            }
        })
        .on('resume', () => {
        })
        .on('line', function(line) {
            element.buffer.push(parseInt(line));

            if (flag == false && element.buffer.length >= 10000) {
                element.rl.pause();
            }
        });

    } )

    function handle() {
        flag = true;

        let rlListEl;
        let indexEl;

        while ( rlList.every(el => el.buffer.length > 0 )) {

            let commonArray = [];

            rlList.forEach( el => {
                commonArray.push( {
                    number: el.buffer[0],
                    index: el.index
                })
            })

            commonArray.sort((x,y) => x.number - y.number);

            let min = commonArray.shift();

            fs.appendFileSync(RESULT_FILE_NAME, min.number + '\n');

            let rlEl = rlList.find((el, ind) => {
                indexEl = ind;
                return el.index == min.index;
            });

            rlEl.buffer.shift();

            rlListEl = rlEl;

            handledLineCount++;

            if (handledLineCount%100000 == 0) {
                console.log(`${handledLineCount/10000}% numbers handled`);
            }
        }

        flag = false;

        if (rlListEl) {

            if (rlListEl.canRemove) {
                rlList.splice(indexEl,1);
            } else {
                rlListEl.rl.resume();
            }
        }
    }

    function handleLast() {
        handle();
        
        if (rlList.length > 0) {
            handleLast()
        }
    }
}

module.exports.handleAllChunks = handleAllChunks;