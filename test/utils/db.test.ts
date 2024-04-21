import { expect, test, beforeEach } from "bun:test";
import getDatabase from "../../src/utils/db";
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { unlink } from "node:fs/promises";
import { Database } from "bun:sqlite";


const mockEnvPaths = {
    data: join(tmpdir(), 'jorinAppTest')
};

const databasePath = join(mockEnvPaths.data, 'jorin.sqlite');


// Ensure the test environment is clean before each test
beforeEach(async () => {
  const file = Bun.file(databasePath);
  if (await file.exists()) {
    await unlink(databasePath);
  }
});

test("Database path is correctly constructed", async () => {
    const db = await getDatabase(mockEnvPaths);
    expect(db.filename).toBe(databasePath);
});


test("Database instance is reused", async () => {
  const firstInstance = await getDatabase(mockEnvPaths);
  const secondInstance = await getDatabase(mockEnvPaths);
  expect(firstInstance).toBe(secondInstance);
});

test("Database path is correctly constructed", async () => {
  const db = await getDatabase(mockEnvPaths);
  expect(db.filename).toBe(databasePath);
});

test("Directory is created if it does not exist", async () => {
  const file = Bun.file(databasePath);
  if (await file.exists()) {
    await unlink(databasePath);
  }
  

  await getDatabase(mockEnvPaths); // This should create the directory
  const db = new Database(databasePath); // Try to open the database to check if the directory was created correctly
  expect(db).toBeInstanceOf(Database);
});