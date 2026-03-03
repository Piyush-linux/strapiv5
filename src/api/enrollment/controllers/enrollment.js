"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::enrollment.enrollment",
  ({ strapi }) => ({
    async create(ctx) {
      const { data } = ctx.request.body;
      console.log(ctx.request.body);
      const { student, course } = data;
      if (!student || !course) {
        return ctx.badRequest("Student and Course are required");
      }

      const existing = await strapi.entityService.findMany(
        "api::enrollment.enrollment",
        {
          filters: {
            student: student,
            course: course,
          },
        }
      );

      console.log(existing);
      if (existing.length > 0) {
        return ctx.badRequest("Student already enrolled in this course");
      }

      // Call default create if no duplicate
      return await super.create(ctx);
    },
  })
);
