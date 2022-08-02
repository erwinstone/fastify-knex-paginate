// 'use strict'

const fp = require('fastify-plugin')
const knex = require('knex')
const attachPaginate = require('knex-paginate').attachPaginate

function fastifyKnex(fastify, options, next) {
	const db = knex(options)
	attachPaginate()
	fastify.decorate('knex', db)
	fastify.addHook('onClose', (fastify, next) => {
		if (fastify.knex === db) {
			fastify.knex.destroy(next)
		}
	})
	next()
}

module.exports = fp(fastifyKnex, {
	fastify: '4.x',
	name: 'fastify-knex-paginate',
})

module.exports.knex = knex.default
