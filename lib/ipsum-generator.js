"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var MAX = 30;
var MIN = 5;
var IpsumGenerator = (function () {
    function IpsumGenerator(src, numberOfParagraphs, numberOfSentencesPerParagraph) {
        if (numberOfParagraphs === void 0) { numberOfParagraphs = 2; }
        if (numberOfSentencesPerParagraph === void 0) { numberOfSentencesPerParagraph = 4; }
        this.ipsum = '';
        for (var paragraphIdx = numberOfParagraphs; --paragraphIdx >= 0;) {
            var paragraph = '';
            for (var sentenceIdx = numberOfSentencesPerParagraph; --sentenceIdx >= 0;) {
                var sentence = '';
                for (var wordsIdx = (Math.floor(Math.random() * (MAX - MIN)) + MIN); --wordsIdx >= 0;) {
                    if (!sentence) {
                        sentence += _.capitalize(src.words[Math.floor(Math.random() * src.words.length)]);
                    }
                    else {
                        sentence += src.words[Math.floor(Math.random() * src.words.length)];
                    }
                }
                paragraph += sentence + ".";
            }
            this.ipsum += paragraph + "\n\n";
        }
    }
    return IpsumGenerator;
}());
exports.IpsumGenerator = IpsumGenerator;
//# sourceMappingURL=ipsum-generator.js.map