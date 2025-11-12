import { config } from "dotenv";

// Example: .env.development.local or .env.production.local
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
    PORT,
    NODE_ENV,
    DB_URI,
} = process.env;