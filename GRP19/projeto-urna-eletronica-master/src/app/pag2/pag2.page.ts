import { Component } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page extends Tab2Page {
  async voto(){
    const alert = await this.alert.create({
      header: 'Aviso!',
      message: 'Voto computado com sucesso',
      buttons: ['OK']
    });

    await alert.present();
  }
}
