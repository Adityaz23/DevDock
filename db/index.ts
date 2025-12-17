import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
if(!process.env.DATABASE_URL){
  throw new Error("Database failed!")
}

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);
