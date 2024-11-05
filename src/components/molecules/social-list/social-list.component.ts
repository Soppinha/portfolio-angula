import {Component} from "@angular/core";
import {AtomSocialItemComponent} from '../../atoms/social-item/social-item.component';

@Component({
  selector: 'molecule-social-list',
  templateUrl: './social-list.component.html',
  standalone: true,
  imports: [AtomSocialItemComponent]
})
export class MoleculeSocialListComponent {

}
