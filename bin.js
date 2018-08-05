#!/usr/bin/env node

var ssbClient = require('ssb-client')
var ssbifyString = require('./index.js')
const fs = require("fs")

if (!process.argv[2]) {
  console.error('usage: ssbify <string of valid HTML>')
  process.exit(1)
}

ssbClient(function (err, sbot) {
  if (err) throw err
  var html = process.argv[2]
  if (html === '-'){
    html = fs.readFileSync("/dev/stdin", "utf-8")
  }
  ssbifyString(sbot, html,
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
