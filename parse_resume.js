const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('harjot singh resume 6 march.pdf');

console.log(typeof pdf);
if (typeof pdf === 'function') {
    pdf(dataBuffer).then(function(data) {
        console.log(data.text);
    }).catch(console.error);
} else if (pdf.default) {
    pdf.default(dataBuffer).then(function(data) {
        console.log(data.text);
    }).catch(console.error);
}
