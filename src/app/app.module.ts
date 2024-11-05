import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AtomLogoComponent} from '../components/atoms/logo/logo.component';
import {AtomMenuButtonComponent} from '../components/atoms/menu-button/menu-button.component';

import {MoleculeNavListComponent} from '../components/molecules/nav-list/nav-list.component';
import {MoleculeSocialListComponent} from '../components/molecules/social-list/social-list.component';

import {OrganismBannerComponent} from '../components/organisms/banner/banner.component';
import {OrganismNavbarComponent} from '../components/organisms/navbar/navbar.component';
import {AtomPortfolioImgComponent} from '../components/atoms/portfolio-img/portfolio-img.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganismNavbarComponent,
    OrganismBannerComponent
  ],
  imports: [
    BrowserModule,
    AtomLogoComponent,
    AtomMenuButtonComponent,
    AtomPortfolioImgComponent,
    MoleculeNavListComponent,
    MoleculeSocialListComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
