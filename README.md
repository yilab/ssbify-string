# ssbify-string

takes an HTML string, URL, and returns a ssb blob-id representing the contents
of the site.

uses node-readability, and imports any images as hash-links.

pass `{ ignoreBrokenImgLinks: true }` as a prop in the third function argument
to get graceful behavior in that case (default). pass false to fail and callback
with an error about it.

## usage

```
ssbify http://blog.codinghorror.com/the-eternal-lorem-ipsum/
# => &m9VsxJCJ4GMwkiSXolovyOOFjoICWoEyXjz7uAImq4w=.sha256
```

```
sbot blobs.get "&m9VsxJCJ4GMwkiSXolovyOOFjoICWoEyXjz7uAImq4w=.sha256"
```

will output the generated markdown.
