import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const DB_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../db.json');

// get the database
export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(db);
}

// saving to the database
export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
    return db;
}

// insertinging a new note to the database
export const insertDB = async (note) => {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;
}