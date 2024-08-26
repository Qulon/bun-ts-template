import pgTx from '@onmoon/pg-tx'
import pg, { type PoolClient } from 'pg'
import env from '#src/utils/env'

export const db = new pg.Pool({
	connectionString: env.PGURI,
	max: 50,
	allowExitOnIdle: true,
})

export async function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

export function tx<T>(callback: (db: PoolClient) => Promise<T>): Promise<T> {
	return pgTx(db, callback)
}

export function isFulfilled<T>(
	value: PromiseSettledResult<T>,
): value is PromiseFulfilledResult<T> {
	return value.status === 'fulfilled'
}

export function splitArrayIntoChunks<T>(array: T[], chunkSize: number): T[][] {
	const chunks: T[][] = []
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize))
	}

	return chunks
}
