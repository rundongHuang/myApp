
import {Page, NavController, Toast} from 'ionic-angular';
import {ConferenceData} from '../../providers/conference-data';


@Page({
  templateUrl: 'build/pages/myView/myView.html'
})
export class MyViewPage { 
  
   imgList = [];
  
   numLL:number = 0;
   
  constructor(public nav: NavController, private confData: ConferenceData ) {
    
      
      this.confData.getImgData().then(data => {
        
        this.imgList = data;
        
        let len = data.length;
       
      });     
      
      console.log("22222");
      
     
  }
  
  showToast(imgList) {
    let toast = Toast.create({
      message: 'Mmmm, buttered toast',
      duration: 3000
    });
    
    toast.setMessage(imgList.description);

    this.nav.present(toast);
  }
  
  
  showImgInfo(data){
    console.log(data)
    // console.log("----------%d--%s",this.numLL,data.title);
    this.numLL = this.numLL + 1;
    
  }
  
}