import * as queries from '#src/app.queries'
import { db } from '#src/utils/core'

const [user] = await queries.getUser.run({ userId: 1 }, db)

if (!user) {
	throw new Error('User not found')
}

console.log(user)
