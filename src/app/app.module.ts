import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoLinkComponent } from '../components/atoms/logo-link/logo-link.component';
import { NavItemComponent } from '../components/atoms/nav-item/nav-item.component';
import { NavListComponent } from '../components/molecules/nav-list/nav-list.component';
import { NavbarComponent } from '../components/organisms/navbar/navbar.component';
import { SocialButtonComponent } from '../components/atoms/social-button/social-button.component';
import { SocialListComponent } from '../components/molecules/social-list/social-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoLinkComponent,
    NavbarComponent,
    NavListComponent,
    NavItemComponent,
    SocialButtonComponent,
    SocialListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
