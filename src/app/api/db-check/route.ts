import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db/dbInstance";

export async function GET() {
    try {
        const result = await db.execute(
            sql`SELECT NOW() AS current_time, 1 AS connection_test`,
        );

        return NextResponse.json({
            success: true,
            message: "Connected to Neon PostgreSQL successfully.",
            result: result[0] ?? null
        });
    } catch (error) {
        console.error("Database connection check failed:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Database connection failed.",
            },
            { status: 500 },
        );
    }
}