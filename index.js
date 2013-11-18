#!/usr/bin/env node

var open = require("open");
var search = process.argv.slice(2).join(" ");

if (!search) {
    console.log("Usage: mdn <search terms>");
    process.exit(1);
}

open("http://mdn.io/" + search);
