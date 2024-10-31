import { Component, HostListener, Input } from "@angular/core";

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent {
    hasShadow = false;

    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        this.hasShadow = window.scrollY > 30
    }

}
