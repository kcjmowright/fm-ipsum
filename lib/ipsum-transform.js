"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio = require("cheerio");
var stream_1 = require("stream");
var _ = require("lodash");
var IpsumTransform = (function (_super) {
    __extends(IpsumTransform, _super);
    /**
     *
     * @param {string} [doc='']
     * @constructor
     */
    function IpsumTransform(doc) {
        if (doc === void 0) { doc = ''; }
        return _super.call(this, {
            flush: function flush(next) {
                var $ = cheerio.load(doc);
                var text = $('body').text().replace(/\s+/g, ' ').replace(/<[^>]>/g, '');
                var source = {
                    phrases: _.filter(_.uniq(text.split(/[,.;:]|\n/g))),
                    words: _.uniq(text.match(/(\w{3,})/g))
                };
                this.push(JSON.stringify(source, null, 2));
                next();
            },
            transform: function transform(buf, enc, next) {
                doc += Buffer.isBuffer(buf) ? buf.toString('utf8') : buf;
                next();
            }
        }) || this;
    }
    return IpsumTransform;
}(stream_1.Transform));
exports.IpsumTransform = IpsumTransform;
//# sourceMappingURL=ipsum-transform.js.map