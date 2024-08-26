import { fromObject } from '@mrspartak/config'
import { z } from 'zod'

export default await fromObject({
	data: process.env,
	schema: z.object({
		// NODE_ENV: z.enum(['development', 'production', 'staging']),
		// SERVER_PORT: z.string(),
		PGURI: z.string(),
	}),
})
