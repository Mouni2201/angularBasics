import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fourthlevel',
  templateUrl: './fourthlevel.component.html',
  styleUrls: ['./fourthlevel.component.css']
})
export class FourthlevelComponent {

@ViewChild('firstName') userFirstName:ElementRef<any>;  //here we can take any, elemenetref

@ViewChild('someText') paraText:ElementRef<any>;

@ContentChild('spanText1') smallText1:ElementRef<any>;
@ContentChild('spanText2') smallText2:ElementRef<any>;
@ContentChild('spanText3') smallText3:ElementRef<any>;



btnClick(){
    console.log(this.userFirstName.nativeElement.value);
    console.log(this.paraText.nativeElement.innerText);

    console.log(this.smallText1.nativeElement.innerText);
     console.log(this.smallText2.nativeElement.innerText);
      console.log(this.smallText3.nativeElement.innerText);
  }
}
