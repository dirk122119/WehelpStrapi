'use strict';

/**
 * gh-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gh-page.gh-page');
