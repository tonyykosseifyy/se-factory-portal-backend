"use strict";
/**
 * student controller
 */
const qs = require("qs");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::student.student", ({ strapi }) => ({

  async findByFilters(ctx) {
    const { query } = ctx.request;
    const { page, pageSize, ...rest_filters } = qs.parse(query);
    const { id: userId } = ctx.state.user;

    const bootcamp = rest_filters?.filters?.bootcamp;
    const languages = rest_filters?.filters?.languages?.language?.["$in"];
    const projectTypes = rest_filters?.filters?.projectTypes?.projectType?.["$in"];
    const favorite = rest_filters?.filters?.favorite;

    const where = {};

    const validBootcamps = new Set(['FSD', 'FSW', 'UIX']);

    if (bootcamp && validBootcamps.has(bootcamp)) {
      where.bootcamp = bootcamp ;
    }
    if (favorite) {
      where.favoriteBy = {
        id: { $eq: userId },
      };
    } 

    if (languages && Array.isArray(languages) && languages.length > 0) {
      where.languages = {
        language: { $in: languages },
      };
    }
    if (projectTypes && Array.isArray(projectTypes) && projectTypes.length > 0) {
      where.projectTypes = {
        projectType: { $in: projectTypes },
      };
    }
    const entries = await strapi.db.query("api::student.student").findMany({
      where,
      populate: {
        languages: {
          select: ["id", "language"],
        },
        projectTypes: {
          select: ["id", "projectType"],
        },
        favoriteBy: {
          select: ["id", "username"],
        },
      },
    });
    return entries;
  },

  async addStudentToFavorites(ctx) {
    const { id } = ctx.params;
    const user_id = ctx.state.auth.credentials.id;
    try {
      await strapi.db.query("api::student.student").update({
        where: {
          id: { $eq: id },
        },
        data: {
          favorite_by: {
            connect: {
              id: user_id,
            },
          },
        },
      });
      return {
        message: "Student added to favorites successfully",
      };
    } catch (err) {
      ctx.throw(400, err);
    }
  },

  async removeStudentFromFavorites(ctx) {
    const { id } = ctx.params;
    const user_id = ctx.state.auth.credentials.id;
    try {
      await strapi.db.query("api::student.student").update({
        where: {
          id: { $eq: id },
        },
        data: {
          favorite_by: {
            disconnect: {
              id: user_id,
            },
          },
        },
      });
      return {
        message: "Student removed from favorites successfully",
      };
    } catch (err) {
      ctx.throw(400, err);
    }
  },

}));
