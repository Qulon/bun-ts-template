/** Types generated for queries found in "src/app.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetUser' parameters type */
export interface IGetUserParams {
  userId: number;
}

/** 'GetUser' return type */
export interface IGetUserResult {
  id: number;
}

/** 'GetUser' query type */
export interface IGetUserQuery {
  params: IGetUserParams;
  result: IGetUserResult;
}

const getUserIR: any = {"usedParamSet":{"userId":true},"params":[{"name":"userId","required":true,"transform":{"type":"scalar"},"locs":[{"a":40,"b":47}]}],"statement":"SELECT\n\tid\nFROM public.users WHERE id = :userId!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 * 	id
 * FROM public.users WHERE id = :userId!
 * ```
 */
export const getUser = new PreparedQuery<IGetUserParams,IGetUserResult>(getUserIR);


