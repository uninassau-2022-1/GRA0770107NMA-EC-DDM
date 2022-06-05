import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public votar: any;
  public total_votos: number = 0;

  constructor() {
    this.votar = [{
      "votos": [0, 0, 0, 0],
      "ganhar": [0,0,0,0]
    }];

  }
  computar(voto: string) {
    this.total_votos = (this.votar[0]['votos'][0] + this.votar[0]['votos'][1] + this.votar[0]['votos'][2] + this.votar[0]['votos'][3]) + 1;
    console.log("total de votos: " + this.total_votos);
    
    switch (voto) {
      
      case '24':
        console.log(JSON.stringify(this.votar));
        this.votar[0]['votos'][0] = this.votar[0]['votos'][0] + 1; // conbilizar o votos
        console.log(`A chance de Gabriel ganhar é ${this.votar[0]['ganhar'][0]} % dos votos`);
        console.log("Você votou em Gabriel");
      
        

        break;
      case '69':
        console.log(JSON.stringify(this.votar));
        this.votar[0]['votos'][1] = this.votar[0]['votos'][1] + 1;
        console.log(`A chance de Gabriel Power Guido é de ${this.votar[0]['ganhar'][1]}% dos votos`);
        console.log("você votou em Power Guido");
      
        break;

      case '420':
        console.log(JSON.stringify(this.votar));
        this.votar[0]['votos'][2] = this.votar[0]['votos'][2] + 1;
        console.log(`A chance de Emma Conha ganhar é de ${this.votar[0]['ganhar'][2]}% dos votos`);
        console.log("você votou em Emma Conha");
        
        break;

      case '666':
        console.log(JSON.stringify(this.votar));
        this.votar[0]['votos'][3] = this.votar[0]['votos'][3] + 1;
        console.log(`A chance de Lucifer ganhar é de ${this.votar[0]['ganhar'][3]}% dos votos`);
        console.log("você votou em Lucifer");
        
        break;
    }

    this.votar[0]['ganhar'][0] = ((this.votar[0]['votos'][0] / this.total_votos) * 100);
    this.votar[0]['ganhar'][1] = ((this.votar[0]['votos'][1] / this.total_votos) * 100);
    this.votar[0]['ganhar'][2] = ((this.votar[0]['votos'][2] / this.total_votos) * 100);
    this.votar[0]['ganhar'][3] = ((this.votar[0]['votos'][3] / this.total_votos) * 100);
  }


}
