

import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

// import { AboutPage } from '../about/about';
// import { MapPage } from '../map/map';
// import { SchedulePage } from '../schedule/schedule';
// import { SpeakerListPage } from '../speaker-list/speaker-list';


@Component({
  selector: 'page-newPage',
  templateUrl: 'newPage.html'
})
export class NewPage {
  // set the root pages for each tab
  
  baseData:any =[
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    // {id: 5, name:'Flash'},
    // {id: 6, name:'gsask'},
    // {id: 7, name:'flsae'},
    // {id: 8, name:'Rune'},
    // {id: 9, name:'Mis'},
    // {id: 10, name:'Gloab'},
    // {id: 11, name:'Console'},
    // {id: 12, name:'Class'}
    
  ];
  timeList:any = [1,2];
  
  voideTypeList: any = [
    {top: 1, name:"热门"},
    {top: 2, name:"二次元"},
    {top: 3, name:"死宅"},
  ];

  slides = [
      {
        title: 'Welcome to <b>ICA</b>',
        image: "assets/img/ionic-logo-white.svg",
      },
      {
        title: 'What is Ionic?',
        image: "assets/img/ionic-logo-white.svg",
      },
      {
        title: 'What is Ionic Platform?',
        image: "assets/img/ionic-logo-white.svg",
      }
    ];

  constructor(navParams: NavParams) {
    
  }

  updatePicture(index, name)
  {
    console.log("show Click: ",index, name)
  }

   onSlideChangeStart(slider) {
    // this.showSkip = !slider.isEnd;

    console.log("onSlideChangeStart: ",slider);
  }
}
