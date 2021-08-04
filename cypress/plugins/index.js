/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

// module.exports = (on, config) => {
//   addMatchImageSnapshotPlugin(on, config)
// }

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
