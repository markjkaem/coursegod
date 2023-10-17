import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

const sql = neon("postgres://tsxsoftware:ZHbX4OaV7MRi@ep-ancient-mountain-63172778.eu-central-1.aws.neon.tech/moneymaker?sslmode=require");
const db = drizzle(sql);

export default db;
