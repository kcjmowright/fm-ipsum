"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var MAX = 30;
var MIN = 5;
var MAX_INT32 = Math.pow(2, 32);
var IpsumGenerator = (function () {
    function IpsumGenerator(src, numberOfParagraphs, numberOfSentencesPerParagraph) {
        if (numberOfParagraphs === void 0) { numberOfParagraphs = 2; }
        if (numberOfSentencesPerParagraph === void 0) { numberOfSentencesPerParagraph = 4; }
        this.ipsum = '';
        for (var paragraphIdx = numberOfParagraphs; --paragraphIdx >= 0;) {
            var paragraph = '';
            for (var sentenceIdx = numberOfSentencesPerParagraph; --sentenceIdx >= 0;) {
                var sentence = '';
                var wordsLen = (Math.floor(Math.random() * (MAX - MIN)) + MIN);
                var randomWords = new Int32Array(Math.min(src.words.length, wordsLen));
                window.crypto.getRandomValues(randomWords);
                for (var wordsIdx = wordsLen; --wordsIdx >= 0;) {
                    var rnd = Math.abs(randomWords[wordsIdx]) / MAX_INT32;
                    var word = rnd < 0.9 ? src.words[Math.floor(rnd * src.words.length)] : src.phrases[Math.floor(rnd * src.phrases.length)];
                    word = word.trim().toLowerCase();
                    if (!sentence) {
                        sentence = _.capitalize(word);
                    }
                    else {
                        sentence += " " + word;
                    }
                }
                paragraph += sentence + ".  ";
            }
            this.ipsum += paragraph + "\n\n";
        }
    }
    return IpsumGenerator;
}());
exports.IpsumGenerator = IpsumGenerator;
//# sourceMappingURL=ipsum-generator.js.map