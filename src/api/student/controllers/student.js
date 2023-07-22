'use strict';
/**
 * student controller
*/
const qs = require('qs');
const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController(
  "api::student.student",
  ({ strapi }) => ({

    async findByFilters(ctx) {
      const { query } = ctx.request;
      const { page, pageSize, ...rest_filters } = qs.parse(query);
      const { id: userId } = ctx.state.user;

      const languages = rest_filters?.filters?.languages?.id['$in'];
      const project_types = rest_filters?.filters?.project_types?.id['$in'];
      const favorite = rest_filters?.filters?.favorite ;

      const where = {};
      if (favorite) {
        where.favorite_by = {
          id: { $eq: userId }
        }
      }
      if (languages && Array.isArray(languages) && languages.length > 0) {
        where.languages = {
          id: { $in: languages }
        };
      }
      if (project_types && Array.isArray(languages) && project_types.length > 0) {
        where.project_types = {
          id: { $in: project_types }
        };
      }
      const entries = await strapi.db.query('api::student.student').findMany({
        where,
        populate: {                    
          languages: {
            select: ['id','language']
          },             
          project_types: {
            select: ['id', 'project_type'],
          },  
          favorite_by: {
            select: ['id', 'username']
          } 
        },
      })
      return entries ;
    },
    async addStudentToFavorites(ctx) {
      const { id } = ctx.params;
      const  user_id  = ctx.state.auth.credentials.id;
      try {
          await strapi.db.query('api::student.student').update({
              where: {
                  id: { $eq: id }
              },
              data: {
                  favorite_by: {
                      connect: {
                          id: user_id
                      }
                  }
              }
          });
          return {
              message: 'Student added to favorites successfully'
          }
      } catch(err) {
          ctx.throw(400, err);
      }

  },
  async removeStudentFromFavorites(ctx) {
      const { id } = ctx.params;
      const  user_id  = ctx.state.auth.credentials.id;
      try {
          await strapi.db.query('api::student.student').update({
              where: {
                  id: { $eq: id }
              },
              data: {
                  favorite_by: {
                      disconnect: {
                          id: user_id
                      }
                  }
              }
          });
          return {
              message: 'Student removed from favorites successfully'
          }
      } catch(err) {
          ctx.throw(400, err);
      }
  },
  })
);
