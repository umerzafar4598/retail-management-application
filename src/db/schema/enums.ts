import { pgEnum } from "drizzle-orm/pg-core";

export const membershipStatusEnum = pgEnum("membership_status", [
    "ACTIVE",
    "INVITED",
    "SUSPENDED",
]);
