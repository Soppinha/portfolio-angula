import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from '../components/atoms/logo/logo.component';
import { NavItemComponent } from '../components/atoms/nav-item/nav-item.component';
import { NavListComponent } from '../components/molecules/nav-list/nav-list.component';
import { NavbarComponent } from '../components/organisms/navbar/navbar.component';
import { SocialItemComponent } from '../components/atoms/social-item/social-item.component';
import { SocialListComponent } from '../components/molecules/social-list/social-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    NavListComponent,
    NavItemComponent,
    SocialItemComponent,
    SocialListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
