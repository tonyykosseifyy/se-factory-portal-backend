'use strict';

/**
 * cloud-platform service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cloud-platform.cloud-platform');
