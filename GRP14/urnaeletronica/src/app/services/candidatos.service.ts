import { Injectable } from '@angular/core';
import { Candidatos } from '../candidatos';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private db: DatabaseService) { }

  private insert(candidatos: Candidatos){
    const sql = 'insert into candidatos (id) values (?)';
    const data = [candidatos];
    return this.db.executeSQL(sql, data);
  }

  private votar(){
    const sql = 'insert into voto (id_voto)'
    const data = []
  }
}
