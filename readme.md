This is an API template that aims to bootstrap your dev process by reducing busy work while still being flexible.

What's included:

- TypeScript
- Fastify w/ the minimum required protection (namely: cors, rate limitation and helmet)
- ESLint + Prettier
- dotenv
- Postgresql DB driver\*

> \*Note: This is just a personal preference, if you use another driver (mongo, mysql etc...) feel free to remove the `@mikro-orm/postgresql` pkg and replace it with your preferred driver.

P.S: Don't forget to update the the orm config file!
