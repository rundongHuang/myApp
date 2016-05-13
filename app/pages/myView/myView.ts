
import {Page, NavController, Toast} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/myView/myView.html'
})
export class MyViewPage { 
  
  imgList = [];
  numLL = 0
   
  constructor(public nav: NavController) {
    
    this.imgList = [
      {
        title: "Welcome to <b>ICA</b>",
        description: "11111",
        image: "img/ica-slidebox-img-1.png",
      },
      {
        title: "What is Ionic?",
        description: "22222",
        image: "img/ica-slidebox-img-2.png",
      },
      {
        title: " What is Ionic Platform?",
        description: "333333",
        image: "img/ica-slidebox-img-3.png",
      },
      {
        title: " What is Ionic Platform?",
        description: "4444444",
        image: "img/ica-slidebox-img-4.png",
      }
    ];
    
  }
  
  showToast(imgList) {
    let toast = Toast.create({
      message: 'Mmmm, buttered toast',
      duration: 3000
    });
    
    toast.setMessage(imgList.description);

    this.nav.present(toast);
  }
  
  
  
  showImgInfo(imgList){
    console.log("----------%d--%s",this.numLL,imgList.description);
    this.numLL = this.numLL + 1;
    
  }
  
}