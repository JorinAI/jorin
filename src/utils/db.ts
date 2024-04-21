import envPaths from 'env-paths';
import { Database } from "bun:sqlite";
import { mkdir } from "node:fs/promises";


let db: Database | undefined;

// Docs: https://bun.sh/docs/api/sqlite

export default async (mockPaths?: ReturnType<typeof envPaths>) => {
    if (db) {
        return db;
    }

    const paths = mockPaths || envPaths('jorin', { suffix: '' });
    
    // create dir if needed
    await mkdir(paths.data, { recursive: true });

    const databasePath = paths.data + '/jorin.sqlite';
    // console.log('Database path:', databasePath);
    
    db = new Database(databasePath,  { create: true });
    
    return db;
};
