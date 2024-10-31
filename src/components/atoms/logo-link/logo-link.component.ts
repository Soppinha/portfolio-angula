import { Component } from "@angular/core";

@Component({
    selector: 'logo-link',
    templateUrl: './logo-link.component.html'
})
export class LogoLinkComponent {
    imageUrl: string = 'https://raw.githubusercontent.com/Soppinha/my-icons/579ec7eecc4488f6beadd3bdc3920fe69b51e882/portifolio/images/logo.svg'

    onScrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}