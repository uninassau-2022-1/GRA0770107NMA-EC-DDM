import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Candidato } from '../models/Candidato';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  listaVotos: Candidato[] = [];

  constructor(
    public alert: AlertController,
    public nav: NavController,
    private storageService: StorageService
    ) {}
  
  ngOnInit(): void {}

  abrirPag(x){
    this.nav.navigateForward(x)
  }

  async buscarCandidatos(){
    this.listaVotos = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarCandidatos();
  }

  async excluirVotos(voto: number){
    await this.storageService.remove(voto);
    this.buscarCandidatos();
  }

}
