import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'atom-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.css'
})
export class AtomMenuButtonComponent {
  @Input() isChecked = false;
  @Output() toggle = new EventEmitter<void>();
}
