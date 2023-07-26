'use strict';

/**
 * student service.
 */

const { createCoreService } = require('@strapi/strapi').factories;



module.exports = createCoreService('api::student.student', ({ strapi }) =>  ({
  isValidArray(filter_array) {
    return filter_array && Array.isArray(filter_array) && filter_array.length > 0 ;
  }
}));