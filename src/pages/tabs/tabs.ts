import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
// import { StarPage } from '../star/star';
import { NewPage } from '../newPage/newPage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  chatParams = {
    user1: "admin",
    user2: "ionic"
  };

  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  tab5Root: any = NewPage;
  
  mySelectedIndex: number;

  vParams: NavParams;

  // @ViewChild('myTabs') tabRef: TabsPage;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.mySelectedIndex = 4;
    this.vParams = navParams;
  }

  ionViewDidEnter() {
    
    console.log("=========111");
  }

  select(index:number)
  {
    console.log("=========ssss", index);
  }
  getByIndex(index)
  {
     console.log("=========getByIndex", index);
  }

   chat() {
    // let modal = this.modalCtrl.create(ChatPage);
    // modal.present()
     let Index = this.mySelectedIndex;

     console.log("=========Speakers", Index);
  }

}
