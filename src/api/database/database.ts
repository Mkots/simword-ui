import Dexie, { Table } from "dexie";

export interface Dictionary {
  id?: number;
  word: string;
  translation: string;
  progress: number;
}

export class MySubClassedDexie extends Dexie {
  dictionary!: Table<Dictionary>;

  constructor() {
    super("simwordDB");
    this.version(1).stores({
      dictionary: "++id, word, translation, progress",
    });
  }
}

export const database = new MySubClassedDexie();
