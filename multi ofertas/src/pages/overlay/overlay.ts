import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service';

/**
 * Generated class for the Overlay page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-overlay',
  templateUrl: 'overlay.html',
  providers: [PeopleService]
})
export class OverlayPage {

  public people: any;

  constructor(public navCtrl: NavController, public peopleService: PeopleService){
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
    .then(data1 => {
      this.people = data1;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverlayPage');
  }

}
