# ssbify-string

takes an HTML string, title string, and URL, returning either a markdown string
with ssb blob links for content, or an ssb blob-id representing the post
content.

uses node-readability, and imports any images as hash-links.

pass `{ ignoreBrokenImgLinks: true }` as a prop in the third function argument
to get graceful behavior in that case (default). pass false to fail and callback
with an error about it.

## usage

### get markdown

```
ssbify-string '<html><body><h1>testing</h1><p>this is a test of ssbify-string</p></body></html>' 'test html blob' 'http://some.website'
# => # test html blob

# testing

this is a test of ssbify-string

[source](http://some.website) 
```

### transmit as blob

```
ssbify-string '<html><body><h1>testing</h1><p>this is a test of ssbify-string</p></body></html>' 'test html blob' 'http://some.website' true
# => &nUNxeZTJkqw0q6yoUqUdlwjz22Pu0XITnhVDiIelEoM=.sha256
```

```
sbot blobs.get "&nUNxeZTJkqw0q6yoUqUdlwjz22Pu0XITnhVDiIelEoM=.sha256"
```

will output the generated markdown.

## TODO

- [x] option to choose the message type (post instead of blob, etc)
- [ ] channel option
- [ ] add commentary string (at that point it should be called ssbify-object,
  probly)
