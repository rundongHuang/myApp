
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
        description: "The <b>Ionic Conference App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.",
        image: "img/ica-slidebox-img-1.png",
      },
      {
        title: "What is Ionic?",
        description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
        image: "img/ica-slidebox-img-2.png",
      },
      {
        title: " What is Ionic Platform?",
        description: "The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "img/ica-slidebox-img-3.png",
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
  
  
  
  showImgInfo(){
    console.log("--------------------%d",this.numLL);
    this.numLL = this.numLL + 1;
    
  }
  
}