import postgres from "postgres";

import "dotenv/config";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?schema=public`;

export const sql = postgres(URL, { ssl: "required" });
