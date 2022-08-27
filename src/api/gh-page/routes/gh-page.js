'use strict';

/**
 * gh-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::gh-page.gh-page');
