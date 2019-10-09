'use strict';

const fn1 = () => {
    console.log('fn1');

    return Promise.resolve(10);
}

const fn2 = () => new Promise(resolve => {
    console.log('fn2');
    setTimeout(() => resolve(2), 2000);
})

async function asyncPromiseReduce(asyncFunctions, reduce, initialValue=1) {
    let memo = initialValue;

    for (let promise of asyncFunctions) {
        memo = await promise().then(value=>reduce(memo,value)).catch(()=>memo);
    }
    
    return Promise.resolve(memo);
}

asyncPromiseReduce(
    [fn2, fn1, fn1, fn2],
    function(memo, value) {
        const result = memo * value;
        console.log('reduce');
        return result;
    },
    10
).then(console.log);