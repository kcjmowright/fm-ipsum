import {IpsumGenerator} from './ipsum-generator';

let src;
let theForm: HTMLFormElement = <HTMLFormElement>document.getElementById('ipsumForm');
let formElements = theForm.elements;
let xhr = new XMLHttpRequest();
let loading = true;

xhr.addEventListener('load', function() {
  src = JSON.parse(this.responseText);
  loading = false;
});
xhr.addEventListener('error', function() {
  alert('Unable to load dictionary.');
  loading = false;
});
xhr.open('GET', 'dist/ipsum-output.json');
xhr.send();

/* tslint:disable no-string-literal */
theForm.addEventListener('submit', () => {
  if(loading) {
    alert('Loading dictionary.  Please try again.');
    return false;
  }
  let numberOfParagraphs = parseInt(formElements['numberOfParagraphs'].value, 10);
  let numberOfSentences = parseInt(formElements['numberOfSentences'].value, 10);

  if(isNaN(numberOfParagraphs)) {
    numberOfParagraphs = 2;
  }
  if(isNaN(numberOfSentences)) {
    numberOfSentences = 4;
  }
  let ipsumGenerator = new IpsumGenerator(src, numberOfParagraphs, numberOfSentences);

  formElements['output'].value = ipsumGenerator.ipsum;
  return false;
});
/* tslint:enable no-string-literal */
