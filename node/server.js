//ECMA 6.1 +
'use strict';

let express = require('express');
// let app = express();r
// app.use(function (request, response) {
//    response.send('<h1>Hello</h1>');
// });
//
// app.listen(52273, function () {
//     console.log('Server Running at http://127.0.0.1:52273');
// })

let app = express();
app.use(express.static('public'));
app.use(function (request, response) {
    response.send('<h1>Nothing.</h1>');
})

app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
})