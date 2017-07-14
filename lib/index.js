"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ipsum_source_generator_1 = require("./ipsum-source-generator");
var process = require("process");
if (process.argv.length < 3) {
    console.log("Usage:\n    node fm-ipsum <url>\n  ");
    process.exit(1);
}
var generator = new ipsum_source_generator_1.IpsumSourceGenerator(process.argv[2]);
//# sourceMappingURL=index.js.map