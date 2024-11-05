import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AtomLogoComponent } from '../components/atoms/logo/logo.component';
import { AtomNavItemComponent } from '../components/atoms/nav-item/nav-item.component';
import { MoleculeNavListComponent } from '../components/molecules/nav-list/nav-list.component';
import { OrganismNavbarComponent } from '../components/organisms/navbar/navbar.component';
import { AtomSocialItemComponent } from '../components/atoms/social-item/social-item.component';
import { MoleculeSocialListComponent } from '../components/molecules/social-list/social-list.component';
import { AtomMenuButtonComponent } from '../components/atoms/menu-button/menu-button.component';
import { BannerComponent } from './organisms/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    AtomLogoComponent,
    OrganismNavbarComponent,
    MoleculeNavListComponent,
    AtomNavItemComponent,
    AtomSocialItemComponent,
    MoleculeSocialListComponent,
    AtomMenuButtonComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
