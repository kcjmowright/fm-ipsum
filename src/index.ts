import {IpsumSourceGenerator} from './ipsum-source-generator';
import * as process from 'process';

if(process.argv.length < 3) {
  console.log(`Usage:
    node fm-ipsum <url>
  `);
  process.exit(1);
}

let generator = new IpsumSourceGenerator(process.argv[2]);
