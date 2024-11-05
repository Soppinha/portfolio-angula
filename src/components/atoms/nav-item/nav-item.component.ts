import { Component, Input } from "@angular/core";

@Component({
    selector: "atom-nav-item",
    templateUrl: "./nav-item.component.html"
})
export class AtomNavItemComponent {
    @Input() text: string = '';
    @Input() sectionId: string = '';

    onScrollToSection(): void {
        const element = document.getElementById(this.sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
