"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ipsum_generator_1 = require("./ipsum-generator");
var src;
var theForm = document.getElementById('ipsumForm');
var formElements = theForm.elements;
var xhr = new XMLHttpRequest();
var loading = true;
xhr.addEventListener('load', function () {
    src = JSON.parse(this.responseText);
    loading = false;
});
xhr.addEventListener('error', function () {
    alert('Unable to load dictionary.');
    loading = false;
});
xhr.open('GET', 'dist/ipsum-output.json');
xhr.send();
/* tslint:disable no-string-literal */
theForm.addEventListener('submit', function () {
    if (loading) {
        alert('Loading dictionary.  Please try again.');
        return false;
    }
    var numberOfParagraphs = parseInt(formElements['numberOfParagraphs'].value, 10);
    var numberOfSentences = parseInt(formElements['numberOfSentences'].value, 10);
    if (isNaN(numberOfParagraphs)) {
        numberOfParagraphs = 2;
    }
    if (isNaN(numberOfSentences)) {
        numberOfSentences = 4;
    }
    var ipsumGenerator = new ipsum_generator_1.IpsumGenerator(src, numberOfParagraphs, numberOfSentences);
    formElements['output'].value = ipsumGenerator.ipsum;
    return false;
});
/* tslint:enable no-string-literal */
//# sourceMappingURL=main-client.js.map