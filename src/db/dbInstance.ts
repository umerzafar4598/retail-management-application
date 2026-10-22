import "server-only";

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import {
    relations,
} from "./relations";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
}

const globalForDb = globalThis as unknown as {
    postgresClient?: ReturnType<typeof postgres>;
};

const client =
    globalForDb.postgresClient ??
    postgres(connectionString, {
        max: process.env.NODE_ENV === "production" ? 1 : 5,
        prepare: false,
        idle_timeout: 20,
        connect_timeout: 10,
    });

if (process.env.NODE_ENV !== "production") {
    globalForDb.postgresClient = client;
}

export { client };

export const db = drizzle({
    client,
    relations: {
        ...relations,
    },
});