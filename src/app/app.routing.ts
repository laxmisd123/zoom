import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { AboutComponent } from './about/about.component';




const arr:Routes=[
  {path:'home' ,component:HomeComponent},
  {path:'contact',component:ContractorsComponent},
  {path:'about',component:AboutComponent}



];
export const routing=RouterModule.forRoot(arr);
