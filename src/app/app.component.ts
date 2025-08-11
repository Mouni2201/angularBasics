import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasics';
  projectName = "Angular";

  concept1 = "String Interpolation and the syntax is {{}}";
  concept2 = "Property Binding and syntax is []";

  customerRole = "Principal";
  InputType = "Checkbox";
  isDisabled = true;

  concept3 = "event binding is action and the syntax is ()";

  btnClick(){
     console.log("Button Clicked");
   }

   btnMouseOver(){
      console.log("You are hovering over the button");
   }


  //  $event
  //  captureData(eventDetails:any){
  //   console.log(eventDetails);
  //   console.log("Data capatured:");
  //   // console.log("eventDetails.target.value");
  //  }

  
  captureData(eventDetails:KeyboardEvent, status:string){
    console.log(eventDetails);
    let element = eventDetails.target as HTMLInputElement
    let data = element.value;
    console.log(data);
   }

// Q: want to apply property databinding and event databinding together to the single html element


testvalue = "enter your name";

sName = "Kushal";
selectedValue = 2;

isChecked = true;
drpChange(){
  console.log("you changed the value");
}


modelChange($event:any){
  console.log($event)
}


//two way data binding
xyz = "Angular basics";
}



