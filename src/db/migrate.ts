import { migrate } from "drizzle-orm/postgres-js/migrator";

import drizzleConfig from "@/../drizzle.config";

import { client, db } from "./index";

await migrate(db, { migrationsFolder: drizzleConfig.out as string });

await client.end();
