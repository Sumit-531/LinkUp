import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "User name is required"],
            trim: true,
            minLength: 2,
            MaxLength: 60,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
            minLength: 5,
            MaxLength: 250,
        },

        password: {
            type: String,
            required: [true, "Password is required."],
            minLength: 6,
        },
    },
    {
        timestamps: true,
    }
);

export default userSchema;