import { config } from "dotenv";

// Example: .env.development.local or .env.production.local
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
    PORT,
} = process.env;