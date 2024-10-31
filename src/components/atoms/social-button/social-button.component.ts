import { Component, Input } from "@angular/core";

@Component({
    selector: 'social-button',
    templateUrl: './social-button.component.html',
    styleUrl: './social-button.component.css'
})
export class SocialButtonComponent {
    @Input() imageUrl: string = '';
    @Input() aria: string = '';
    @Input() link: string = '';
}