import * as _ from 'lodash';

const MAX = 30;
const MIN = 5;

export class IpsumGenerator {
  public ipsum;

  constructor(src: { words: string[] }, numberOfParagraphs: number = 2, numberOfSentencesPerParagraph: number = 4) {
    this.ipsum = '';
    for(let paragraphIdx = numberOfParagraphs; --paragraphIdx >= 0; ) {
      let paragraph = '';

      for(let sentenceIdx = numberOfSentencesPerParagraph; --sentenceIdx >= 0; ) {
        let sentence = '';

        for(let wordsIdx = (Math.floor(Math.random() * (MAX - MIN)) + MIN); --wordsIdx >= 0; ) {
          if(!sentence) {
            sentence += _.capitalize(src.words[Math.floor(Math.random() * src.words.length)]);
          } else {
            sentence += src.words[Math.floor(Math.random() * src.words.length)];
          }
        }
        paragraph += `${sentence}.`;
      }
      this.ipsum += `${paragraph}\n\n`;
    }
  }
}
