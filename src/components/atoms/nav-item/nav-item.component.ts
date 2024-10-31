import { Component, Input } from "@angular/core";

@Component({
    selector: "nav-item",
    templateUrl: "./nav-item.component.html"
})
export class NavItemComponent {
    @Input() text: string = '';
    @Input() sectionId: string = '';
    @Input() className: string = '';

    onScrollToSection(): void {
        const element = document.getElementById(this.sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}