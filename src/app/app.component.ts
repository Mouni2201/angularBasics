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
}
