import { Component } from '@angular/core';

@Component({
  selector: 'app-secondlevel',
  templateUrl: './secondlevel.component.html',
  styleUrls: ['./secondlevel.component.css']
})
export class SecondlevelComponent {

  divColor = 'yellowGreen';
divfontSize = '30px';
divtext = 'Second level component';

changeColor(){
  this.divColor = 'red';
}
resetColor(){
    this.divColor = 'yellow';
  }

clickOutColor(){
  this.divColor = 'blue';
}

// ngClass
// isStatus = true;
isStatus = false;
// if give false it takes para1 style for true it takes para

changePara(){
  //this,isStatus = !false;
  this.isStatus = !this.isStatus;
  //console.log(this.isStatus);
  // setInterval(()=>{
  //   this.isStatus = !this.isStatus;
  //   //every 2000s it will update
  // },2000)

  setTimeout(()=>{
    this.isStatus = !this.isStatus;
    //onetime only
  })
}

}


