'use strict';

/**
 * database-technology service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::database-technology.database-technology');
