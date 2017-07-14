import * as _ from 'lodash';

const MAX = 30;
const MIN = 5;
const MAX_INT32 = Math.pow(2, 32);

export class IpsumGenerator {
  public ipsum;

  constructor(src: { phrases: string[], words: string[] }, numberOfParagraphs: number = 2, numberOfSentencesPerParagraph: number = 4) {
    this.ipsum = '';

    for(let paragraphIdx = numberOfParagraphs; --paragraphIdx >= 0; ) {
      let paragraph = '';

      for(let sentenceIdx = numberOfSentencesPerParagraph; --sentenceIdx >= 0; ) {
        let sentence = '';
        let wordsLen = (Math.floor(Math.random() * (MAX - MIN)) + MIN);
        let randomWords = new Int32Array(Math.min(src.words.length, wordsLen));

        window.crypto.getRandomValues(randomWords);
        for(let wordsIdx = wordsLen; --wordsIdx >= 0; ) {
          let rnd = Math.abs(randomWords[wordsIdx]) / MAX_INT32;
          let word = rnd < 0.9 ? src.words[ Math.floor(rnd * src.words.length)] : src.phrases[Math.floor(rnd * src.phrases.length)];

          word = word.trim().toLowerCase();
          if(!sentence) {
            sentence = _.capitalize(word);
          } else {
            sentence += ` ${word}`;
          }
        }
        paragraph += `${sentence}.  `;
      }
      this.ipsum += `${paragraph}\n\n`;
    }
  }
}
