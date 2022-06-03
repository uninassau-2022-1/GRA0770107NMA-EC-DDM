import { Component, OnInit } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidato } from '../models/Candidato';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})

export class Pag1Page implements OnInit {

  listaVotos: Candidato[] = [];

  formVoto: FormGroup;
  candidato: Candidato = new Candidato();

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formVoto = this.formBuilder.group({
      voto: ['', Validators.compose([Validators.required, Validators.maxLength(5), Validators.pattern('[0-9]*')])]
    });
  }

  ngOnInit(): void {}

  async buscarCandidatos(){
    this.listaVotos = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarCandidatos();
  }


  async pegarVoto(key: any): Promise<any> {
    try{
      const result = await this.storageService.get(key);
      if (result != null){
        return await result;
      }
    } catch (reason){
      return await null;
    }
  }

  async addVoto() {
    if (this.pegarVoto('voto1') != null) {
      this.candidato.voto1 = this.candidato.voto1 + 1;
      await this.storageService.set(this.candidato.voto1, this.candidato);
      this.route.navigateByUrl('/tabs/tab2');
      console.log(this.candidato.voto1);
    }
  }

  enviaVoto(voto: number) {
    this.storageService.funcaoVoto(voto);
  }


}

export class Pag1Page1 extends Tab2Page {

  async voto(){
    const alert = await this.alert.create({
      header: 'Aviso!',
      message: 'Voto computado com sucesso',
      buttons: ['OK']
    });

    await alert.present();
  }

}
