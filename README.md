# ssbify-string

takes an HTML string, title string, and URL, returning a ssb blob-id
representing the contents of the site.

uses node-readability, and imports any images as hash-links.

pass `{ ignoreBrokenImgLinks: true }` as a prop in the third function argument
to get graceful behavior in that case (default). pass false to fail and callback
with an error about it.

## usage

```
ssbify '<html><body><h1>testing</h1><p>this is a test of ssbify-string</p></body></html>' 'test html blob'
# => &o4gikuRPowHX8PFtBgzvqC69eN0sEImySKiWP530XNQ=.sha256
```

```
sbot blobs.get "&o4gikuRPowHX8PFtBgzvqC69eN0sEImySKiWP530XNQ=.sha256"
```

will output the generated markdown.
