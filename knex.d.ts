import { FastifyPluginCallback } from 'fastify'
import knex, { Knex } from 'knex'
import 'knex-paginate'

declare const fastifyKnex: FastifyPluginCallback<Knex.Config>

export { knex, Knex }

export default fastifyKnex

declare module 'fastify' {
	interface FastifyInstance {
		knex: Knex
	}
}
