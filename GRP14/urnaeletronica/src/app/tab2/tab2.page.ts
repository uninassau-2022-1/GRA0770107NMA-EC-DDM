import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page {

  public numero: number;
  public votosTom: number = 0;
  public votosTobey: number = 0;
  public votosAndrew: number = 0;

  constructor() {}

  votar(numero: number) {
    this.numero = numero;

    if (this.numero == 1) {
      this.votosTom++;
      console.log('Votou no Tom Holland');
    } else if (this.numero == 2) {
      this.votosTobey++;
      console.log('Votou no Tobey Maguire');
    } else if (this.numero == 3) {
      this.votosAndrew++;
      console.log('Votou no Andrew Garfield');
    } else {
      console.log('Número inválido, escolha as opções disponíveis')
    }

  }
}
