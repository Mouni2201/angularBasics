import { Component } from '@angular/core';

@Component({
  selector: 'app-thirdlevel',
  templateUrl: './thirdlevel.component.html',
  styleUrls: ['./thirdlevel.component.css']
})
export class ThirdlevelComponent {

  customerEligibility = true;

  //let me define method here

  // evtclick(element:any){
  //   console.log(element);
  // }


  // evtclick(el:HTMLParagraphElement){
  //   console.log(el.innerText);
  //   if(el.innerText == "Hey!!! How are you dear?"){
  //     console.log("Yeah!! Iam good");

  //   }
  //   else{
  //     console.log("No Answer");
  //   }
  // }

  answer=" ";
  evtclick(el:HTMLParagraphElement){
    console.log(el.innerText);
    if(el.innerText == "Hey!!! How are you dear?"){
      this.answer = "Yeah!! Iam good";

    }
    else{
      this.answer = "no Answer";
    }
  }
  
  data = [
    "Kushal likes Sweet and lives in london",
    "Medhansh plays very well and lives in chennai",
    "Sahasra plays so many games and lives in banglore",
  ]

  data1 = [
    "dosa",
    "Idly",
    "Rice"
  ]

  FoodDefaultValue = 2;
  data2  = [
    "Maggie",
    "Pasta",
    "Panipuri"
  ]

  setValue = -1
  evtDecideFood(){
    this.FoodDefaultValue = this.setValue
  }

  data3FoodDefaultValue = 'CA103';
  data3 = [
    {itemNo :'CA101', itemName : "Dosa"},
     {itemNo :'CA102', itemName : "Idly"},
      {itemNo :'CA103', itemName : "Rice"},

  ]

  columnNames = ["ItemNo", "ItemName"]

  customerId = 33656;
}
