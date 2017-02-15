
import { Routes, RouterModule} from "@angular/router";
import {HomeContentComponent} from './home-content/home-content.component'
import { AboutComponent } from './about/about.component';
import { InputDataComponent} from './input-data/input-data.component'

const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'input', component: InputDataComponent},
  { path: '', component: HomeContentComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);