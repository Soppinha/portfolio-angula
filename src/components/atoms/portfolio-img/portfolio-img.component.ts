import {Component, Input} from '@angular/core';

@Component({
  selector: 'atom-portfolio-img',
  standalone: true,
  styleUrl: './portfolio-img.component.css',
  templateUrl: './portfolio-img.component.html'
})
export class AtomPortfolioImgComponent {
  @Input() imageUrl : string = '';
}
