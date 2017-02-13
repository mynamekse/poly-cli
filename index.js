#! /usr/bin/env node
var fs = require('fs');
console.log('This is the filesearch script. '+process.cwd());

var dir=process.cwd()+"/hello";

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}