#!/usr/bin/env node

var open = require("open");
var search = process.argv[2] || "";

open("http://mdn.io/" + search);
