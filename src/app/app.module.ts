import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TestCompComponent } from './test-comp/test-comp.component';

import{FormsModule} from '@angular/forms';
import { TestlevelComponent } from './testlevel/testlevel.component';
import { SecondlevelComponent } from './secondlevel/secondlevel.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    TestlevelComponent,
    SecondlevelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
