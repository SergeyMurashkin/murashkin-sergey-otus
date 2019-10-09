'use strict';

const fn1 = () => {
    console.log('fn1')
    return Promise.resolve(10)
}

const fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 3000)
})

function promiseReduce(asyncFunctions, reduce, initialValue=1) {
    if (asyncFunctions.length>0) {
        function promiseExecutor(memo, index) {
            const result = asyncFunctions[index]().then(value=>reduce(memo,value)).catch(()=>memo);

            if (index<asyncFunctions.length-1) {
                return result.then((newMemo)=>promiseExecutor(newMemo,(index+1)));
            } else {
                return result;
            }
        }

        return promiseExecutor(initialValue,0);
    } else {
        return Promise.resolve(initialValue);
    }
}

promiseReduce(
    [fn2, fn1, fn1, fn2],
    function(memo, value) {
        console.log('reduce');
        return memo * value;
    },
    10
).then(console.log);