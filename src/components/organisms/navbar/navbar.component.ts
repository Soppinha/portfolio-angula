import { Component, HostListener, Input } from "@angular/core";

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.css"
})
export class NavbarComponent {
    isChecked = false;
    hasShadow = false;

    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        this.hasShadow = window.scrollY > 30
    }

    toggleChecked(): void {
      this.isChecked = !this.isChecked;
    }

}
