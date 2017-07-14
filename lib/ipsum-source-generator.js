"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var https = require("https");
var ipsum_transform_1 = require("./ipsum-transform");
var process = require("process");
var IpsumSourceGenerator = (function () {
    function IpsumSourceGenerator(url) {
        var req = https.request(url, function (res) {
            var transform = new ipsum_transform_1.IpsumTransform();
            res.pipe(transform).pipe(process.stdout);
            res.on('finish', function (done) {
                done();
            });
        });
        req.on('error', function (error) {
            console.log(error);
        });
        req.end();
    }
    return IpsumSourceGenerator;
}());
exports.IpsumSourceGenerator = IpsumSourceGenerator;
//# sourceMappingURL=ipsum-source-generator.js.map