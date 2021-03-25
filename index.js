String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};
const fs = require('fs-extra');
let contents = fs.readFileSync(`${process.cwd()}/build/index.html`).toString();
contents = contents.allReplace({
    '.js"': `.js?v=${new Date().getTime()}"`,
    '.css"': `.css?v=${new Date().getTime()}"`
});
fs.writeFile(`${process.cwd()}/build/index.html`, contents, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});