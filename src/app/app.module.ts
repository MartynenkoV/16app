import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

import { routing }   from './app.routing';
import { InputDataComponent } from './input-data/input-data.component';
import { ResultComponent } from './input-data/result.component';
// import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   { path: '', component: HomeContentComponent }
// ];



@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    InputDataComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //RouterModule.forRoot(appRoutes)
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
