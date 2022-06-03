import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page {

  public voto: number;
  public votos69: number = 0;
  public votos99: number = 0;
  public votos20: number = 0;
  public votos40: number = 0;

  constructor() {}

  votar(voto: number) {
    this.voto = voto;

    if (this.voto == 69) {
      this.votos69++;
      console.log('Votou no Zé do Viagra.');
    } else if (this.voto == 99) {
      this.votos99++;
      console.log('Votou no Sem Nome.');
    } else if ( this.voto == 20) {
      this.votos20++;
      console.log('Votou no Luva de Pedreiro');
    } else if (this.voto == 40) {
      this.votos40++;
      console.log('Votou no Paulo Camaro');
    } else {
      console.log('Voto inválido.');
    }

  }
}
