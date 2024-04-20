import envPaths from 'env-paths';
import { Database } from "bun:sqlite";
import { mkdir } from "node:fs/promises";


let db: Database | undefined;

export default async () => {
    if (db) {
        return db;
    }

    const paths = envPaths('jorin', {
        suffix: ''
    });
    
    // create dir if needed
    await mkdir(paths.data, { recursive: true });

    const databasePath = paths.data + '/jorin.sqlite';
    // console.log('Database path:', databasePath);
    
    // https://bun.sh/docs/api/sqlite
    db = new Database(databasePath,  { create: true });
    
    return db;
};
