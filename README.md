
# fastify-knex-paginate

A module for Fastify to support Knex's query builder with paginate method


## Usage/Examples

```javascript
import path from 'path'
import fastify from 'fastify'
import fastifyKnex from 'fastify-knex-paginate'

const app = fastify()
app.register(fastifyKnex, {
  client: 'better-sqlite3',
  connection: { filename: path.resolve('./db.sqlite3') },
  useNullAsDefault: true,
})

app.get('/', () => {
  return await app.knex('users').paginate({
    perPage: 5,
    currentPage: req.query.page || 1
  })
})

app.listen({ port: 8000 }, (err, address) => {
  if (err) throw err
  console.log(`server running on ${address}`)
})
```


## API Reference

Read more at

[https://github.com/knex/knex](https://github.com/knex/knex)

[https://github.com/felixmosh/knex-paginate](https://github.com/felixmosh/knex-paginate)
