#!/usr/bin/env node

var open = require("open");
var search = process.argv.slice(2).join(" ");

open("http://mdn.io/" + search);
