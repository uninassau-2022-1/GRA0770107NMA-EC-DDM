import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite';

import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName: string = 'candidatos.db';

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) { }

  async openDatabase() {
    try{
      this.db = await this.sqlite.create({name:this.databaseName, location: 'default'});
      await this.createDatabase();
    } catch(error){
      console.error('Houve um erro ao criar o banco de dados',error);
    }
  }

  async createDatabase() {
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
  }

  getCreateTable() {
    const sqls = [];
    sqls.push ('CREATE TABLE IF NOT EXISTS candidatos(id integer primary key autoincrement, nome_candidato varchar(50), id_voto integer, foreign key);');
    sqls.push ('CREATE TABLE IF NOT EXISTS voto(id_voto integer primary key autoincrement, nome_candidato varchar(50));');
    return sqls.join ('\n');
  }

  executeSQL(sql: string, params?: any []) {
    return this.db.executeSql(sql,params);
  }
}
