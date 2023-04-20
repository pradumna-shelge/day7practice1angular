import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetdataComponent } from './getdata/getdata.component';
import { AdddataComponent } from './adddata/adddata.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  
  {
    path: 'form',
    component: AdddataComponent
  },
  {
    path: 'database',
    component: GetdataComponent
  },
  {
    path: '',
    component: WelcomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
