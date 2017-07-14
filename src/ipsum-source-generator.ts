import * as https from 'https';
import {IpsumTransform} from './ipsum-transform';
import * as process from 'process';

export class IpsumSourceGenerator {

  constructor(url: string) {
    let req = https.request(url, (res: https.IncomingMessage) => {
       let transform = new IpsumTransform();

       res.pipe(transform).pipe(process.stdout);
       res.on('finish', done => {
         done();
       });
    });

    req.on('error', error => {
      console.log(error);
    });
    req.end();
  }
}
