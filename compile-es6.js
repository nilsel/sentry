#!/usr/bin/env node
var Compiler = require("es6-module-transpiler").Compiler;
var fs = require("fs");
var path = require("path");

var normalizePath = function(p) {
  return p.replace(/\\/g, '/');
};

var moduleName = normalizePath(process.argv[2]);
var contents = fs.readFileSync(process.argv[2]);

var compiler = new Compiler(contents, moduleName);
var output = compiler.toAMD();

console.log(process.argv[3]);

fs.writeFileSync(process.argv[3], output);
