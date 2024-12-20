import type { InferSchemaType } from "mongoose"

import type {
    AccountSchema,
    SessionSchema,
    ActivitySchema
} from "src/schemas";

// DATABASE TYPES
// Types that are also database models are inferred from the Mongoose schemas in src/schemas.
export type Account = InferSchemaType<typeof AccountSchema>
export type Session = InferSchemaType<typeof SessionSchema>
export type Activity = InferSchemaType<typeof ActivitySchema>

// GENERAL TYPES
export interface Cookies {
    token?: string,
    session?: string,
}