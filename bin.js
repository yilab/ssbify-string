#!/usr/bin/env node

var ssbClient = require('ssb-client')
var ssbifyString = require('./index.js')

if (!process.argv[2]) {
  console.error('usage: ssbify <string of valid HTML>')
  process.exit(1)
}

ssbClient(function (err, sbot) {
  if (err) throw err
  ssbifyString(sbot, process.argv[2],
               { ignoreBrokenLinks: true,
                 title: process.argv[3] || 'untitled snippet',
                 url: process.argv[4] || '',
                 xmitAsBlob: process.argv[5] || false
               },
               function (err, res) {
                 if (err) throw err
                 console.log(res)
                 process.exit(0)
               })
})
