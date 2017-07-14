FM Ipsum
========

A generator of ipsum generators.  FM Ipsum uses a URL HTML page as the source dictionary.

<form id="ipsumForm">
  <div>
    <label>
      Number of Paragraphs:
      <input name="numberOfParagraphs" value="2" />
    </label>
  </div>
  <div>
    <label>
      Number of Sentences:
      <input name="numberOfSentencess" value="4" />
    </label>
  </div>
  <div>
    <button type="submit" value="Generate It!"></button>
  </div>
  <div>
    <textarea id="output" style="width: 100%;height: 250px">
    </textarea>
  </div>
</form>
<script src="dist/bundle.js" type="text/javascript"></script>

## Quick Start

### Prerequisites

```
node @latest
```

### Install and Run

```sh
npm install
npm run build
npm run start -- "https:/some-web-site.com/content.html" > dist/ipsum-output.json
```




