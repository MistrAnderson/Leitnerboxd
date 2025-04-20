import { openDB, IDBPDatabase } from 'idb';
import { ILeitnerDB } from './interfaces';

let dbPromise: Promise<IDBPDatabase<ILeitnerDB>> | null = null

async function getDB(): Promise<IDBPDatabase<ILeitnerDB>> {
  if (dbPromise) return dbPromise;

  dbPromise = openDB<ILeitnerDB>("leitnerDB", 1, {
    upgrade(db) {
      db.createObjectStore('cards', { keyPath: 'id' })
    },
  })

  return dbPromise
}


export { getDB } 
