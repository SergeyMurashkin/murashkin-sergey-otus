'use strict';

const http = require('http');

function sendRequests(requestCount, type) {

    const options = {
        host: '',
        port: '8888',
        path: 'https://localhost',
    }

    function sendConsistentRequests(options, count) {
        if (count <= 0) return;
        
        http.get(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', console.log);
            sendConsistentRequests(options,count-1);
        });
    }

    function sendParallelRequests(options, count) {
        for (let c = 0 ; c < count ; c++) {
            http.get(options, function(res) {
                res.setEncoding('utf8');
                res.on('data', console.log);
            });
        }    
    }

    if (type == 'parallel') {
        sendParallelRequests(options,requestCount);
    } else if (type == 'consistently') {
        sendConsistentRequests(options,requestCount);
    } else {
        console.log('Enter correct type of requests: parallel or consistently')
    }

}

sendRequests(process.argv[2], process.argv[3]);