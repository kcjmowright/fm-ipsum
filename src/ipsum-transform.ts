import * as cheerio from 'cheerio';
import {Transform} from 'stream';
import * as _ from 'lodash';

export class IpsumTransform extends Transform {

  /**
   *
   * @param {string} [doc='']
   * @constructor
   */
  constructor(doc: string = '') {
    super({
      flush: function flush(next: Function) {
        let $ = cheerio.load(doc);
        let text = $('body').text().replace(/\s+/g, ' ').replace(/<[^>]>/g, '');
        let source = {
          phrases: _.filter(_.uniq(text.split(/[,.;:]|\n/g))),
          words: _.uniq(text.match(/(\w{3,})/g))
        };

        this.push(JSON.stringify(source, null, 2));
        next();
      },
      transform: function transform(buf: string | Buffer, enc: string, next: Function) {
        doc += Buffer.isBuffer(buf) ? buf.toString('utf8') : buf;
        next();
      }
    });
  }
}
