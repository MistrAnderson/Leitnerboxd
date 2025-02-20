import { openDB, IDBPDatabase } from 'idb';
import { ILeitnerDB } from './interfaces';

async function initDB(): Promise<IDBPDatabase<ILeitnerDB>> {
  return openDB<ILeitnerDB>("leitnerDB", 1, {
    upgrade(db) {
      db.createObjectStore('cards', {keyPath: 'id', autoIncrement: true})
    },
  })
}


export const idb = await initDB()
