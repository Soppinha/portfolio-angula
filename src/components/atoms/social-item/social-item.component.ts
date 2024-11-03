import { Component, Input } from "@angular/core";

@Component({
    selector: 'social-item',
    templateUrl: './social-item.component.html',
    styleUrl: './social-item.component.css'
})
export class SocialItemComponent {
    @Input() imageUrl: string = '';
    @Input() aria: string = '';
    @Input() link: string = '';
}
