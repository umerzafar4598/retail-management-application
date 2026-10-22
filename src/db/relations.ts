import {
    defineRelations,
    defineRelationsPart,
} from "drizzle-orm";

import * as schema from "./schema";

export const relations = defineRelations(schema);
