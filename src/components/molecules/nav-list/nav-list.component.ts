import {Component} from "@angular/core";
import {AtomNavItemComponent} from '../../atoms/nav-item/nav-item.component';

@Component({
  selector: "molecule-nav-list",
  templateUrl: "./nav-list.component.html",
  standalone: true,
  imports: [AtomNavItemComponent]
})
export class MoleculeNavListComponent {

}
