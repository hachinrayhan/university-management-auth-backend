import mongoose from "mongoose";
import app from "./app";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 9000;
const database_url = process.env.DATABASE_URL;

async function main() {
    try {
        await mongoose.connect(database_url as string);
        console.log("Database connected successfully");

        app.listen(port, () => {
            console.log(`Application is listening on port ${port}`)
        })
    }
    catch (err) {
        console.log("failed to connect database.", err);
    }
}

main();