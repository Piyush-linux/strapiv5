
# Enable Public Read Access
Admin Panel → Settings → Users & Permissions Plugin → Roles → Public
find & finOne too all except students 

# REST

```sh
brew install httpie

http GET http://localhost:1337/api/courses\?populate\=\* -b
```

```js
//- src/api/enrollment/controllers/enrollment.js
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::enrollment.enrollment', ({ strapi }) => ({

  async create(ctx) {
    const { data } = ctx.request.body;
    const { student, course } = data;

    if (!student || !course) {
      return ctx.badRequest('Student and Course are required');
    }

    // Check duplicate
    const existing = await strapi.entityService.findMany(
      'api::enrollment.enrollment',
      {
        filters: {
          student: student,
          course: course,
        },
      }
    );

    if (existing.length > 0) {
      return ctx.badRequest('Student already enrolled in this course');
    }

    // Call default create if no duplicate
    return await super.create(ctx);
  },

}));
```


```sh
http POST http://localhost:1337/api/enrollments \
Content-Type:application/json \
data:='{"student":1,"course":1,"progress":10,"status":"active"}' -b


{
    "data": null,
    "error": {
        "details": {},
        "message": "Student already enrolled in this course",
        "name": "BadRequestError",
        "status": 400
    }
}
```

Because migration pain happens here:
Custom controllers
Lifecycle hooks
EntityService usage
Complex queries
Deep population
Validation logic


# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
