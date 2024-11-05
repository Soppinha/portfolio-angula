import {Component, Input} from "@angular/core";

@Component({
  selector: 'atom-social-item',
  templateUrl: './social-item.component.html',
  styleUrl: './social-item.component.css',
  standalone: true,
})
export class AtomSocialItemComponent {
  @Input() imageUrl: string = '';
  @Input() aria: string = '';
  @Input() link: string = '';
}
