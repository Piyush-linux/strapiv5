"use strict";

module.exports = {
  register({ strapi }) {
    strapi.documents.use(async (ctx, next) => {
      if (ctx.uid === "api::enrollment.enrollment" && ctx.action === "create") {
        if (!ctx.params.data.progress) {
          ctx.params.data.progress = 0;
        }
      }

      return next();
    });
  },
};
