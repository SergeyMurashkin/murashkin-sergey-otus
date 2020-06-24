const fs = require('fs');

function create100MbNumbers(fileName, delimeter) {

    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
    }

    for (let j=1; j<=10; j++) {
        let chunk = '';

        for (let i=0; i<100000; i++){
            chunk += `${Math.round((Math.random()*1000000000))}${delimeter}`;
        }

        fs.appendFileSync(fileName, chunk);

        if (j%10 == 0) {
            console.log(`${j*10}% numbers created`);
        }
    }
}

module.exports.create100MbNumbers = create100MbNumbers;