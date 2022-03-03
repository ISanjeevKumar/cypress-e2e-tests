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

const getEnvironmnetUrls = require("../config/runConfig")

/**
 * @type {Cypress.PluginConfig}
 */

const {
  ENVIRONMENT,
  TEST
} = process.env

const getRunConfigs = function (cypressConfig) {

  const envBasedRunCypressConfig = getEnvironmnetUrls(ENVIRONMENT);
  //envBasedRunCypressConfig.integrationFolder = `./cypress/integration/${TEST}`;

  envBasedRunCypressConfig.env = Object.assign(cypressConfig.env, envBasedRunCypressConfig.env);
  const config = Object.assign(cypressConfig, envBasedRunCypressConfig);

  return config;
}

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return getRunConfigs(config);
}
