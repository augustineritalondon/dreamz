import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'collections',
    component: CollectionsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    HomeComponent,
    NavbarComponent,
    AboutusComponent,
    FooterComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
