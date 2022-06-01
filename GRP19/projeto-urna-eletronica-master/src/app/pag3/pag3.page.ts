import { Component } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-pag3',
  templateUrl: './pag3.page.html',
  styleUrls: ['./pag3.page.scss'],
})
export class Pag3Page extends Tab2Page {
  async voto(){
    const alert = await this.alert.create({
      header: 'Aviso!',
      message: 'Voto computado com sucesso',
      buttons: ['OK']
    });

    await alert.present();
  }
}
