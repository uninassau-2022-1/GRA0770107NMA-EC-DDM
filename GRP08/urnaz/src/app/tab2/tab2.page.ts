import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page {

  public voto: number;
  public votos10: number = 0;
  public votos20: number = 0;

  constructor() {}

  votar(voto: number) {
    this.voto = voto;

    if (this.voto == 10) {
      this.votos10++;
      console.log('Votou no 10.');
    } else if (this.voto == 20) {
      this.votos20++;
      console.log('Votou no 20.');
    } else {
      console.log('Voto inválido.');
    }

  }
}
