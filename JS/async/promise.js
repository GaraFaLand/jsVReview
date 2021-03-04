//ECMA 6.1 +
'use strict';

//state : pending -> fulfilled or rejected
//Producer and Consumer

//producer
let promise = function(param) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (param) {
                resolve('Complete');
            } else {
                reject('fail');
            }
        },3000);
    });
};

//consumer
promise(false).then(function (text) {
    console.log(text);
}, function (error) {
    console.error(error);
});