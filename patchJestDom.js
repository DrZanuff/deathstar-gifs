const fs = require('fs')
const path = require('path')

// import fs from 'fs'
// import path from 'path'

const typesFile = path.resolve(
  'node_modules/@types/testing-library__jest-dom/index.d.ts'
)
const encoding = 'utf8'
const strings = {
  search: '/// <reference types="jest" />',
  replace:
    '// See https://github.com/testing-library/jest-dom/issues/427 for reference'
}

const result = fs
  .readFileSync(typesFile, encoding)
  .replace(strings.search, strings.replace)

fs.writeFileSync(typesFile, result, encoding)
