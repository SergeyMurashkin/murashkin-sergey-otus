'use strict';

function sum(n) {
    let result = 0;
   
    function getSum(number) {
        if (number === undefined) {
            return result;
        } else {
            result += number;
            return getSum;
        }
    }

    return getSum(n);
}