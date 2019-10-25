import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  notes = [
    {
      id: 1,
      date: '2016-09-15',
      title: 'Firebase',
      content: 'Firebase permite o desenvolvimento serverless'   
    },
    {
      id: 2,
      date: '2019-07-12',
      title: "Ionic",
      content: "Ionic para desenvolvimento híbrido"  
    },
    {
      id: 3,
      title: "Angular",
      content: "Já está na versão 8",
      date: "2019-10-25"
    }
  ]


  //injeção de dependência
  //navCtrl = new NavController();
  //é um tipo de inversão de controle
  constructor(public navCtrl: NavController) {
    
  }

  onItemClick (note){
    //console.log ("onItemClick", note);
    this.navCtrl.push ('DetailPage', {noteParam: note});

  }

}
