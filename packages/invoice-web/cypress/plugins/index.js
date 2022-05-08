/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const { isFileExist, findFiles } = require('cy-verify-downloads');
const { rmdir, existsSync } = require('fs')
const path = require('path')
/**
 * @type {Cypress.PluginConfig}
 */
const injectDevServer = require("@cypress/react/plugins/react-scripts")
//const webpackconfig = require("../../webpack.config")
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // conf = require('webpack.config')
  injectDevServer(on, config, {webpackConfigPath: path.resolve('webpack.config.js')}); //, {webpackConfigPath: './webpack.config'}
  on('task', { isFileExist, findFiles })
  on('task', {
    deleteFolder(folderName) {
      console.log('deleting folder %s', folderName)
      if (!existsSync(folderName)) return new Promise((resolve)=>resolve(null));
      return new Promise((resolve, reject) => {
        rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
          if (err) {
            console.error(err)
            return reject(err)
          }
          resolve(null)
        })
      })
    },
  })
  return config;
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
