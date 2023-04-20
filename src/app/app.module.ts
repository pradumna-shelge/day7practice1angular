import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddataComponent } from './adddata/adddata.component';
import { GetdataComponent } from './getdata/getdata.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './servercies/employee.service';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AdddataComponent,
    GetdataComponent,
    WelcomepageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
