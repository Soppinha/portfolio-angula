import { Component } from '@angular/core';

@Component({
  selector: 'atom-portfolio-img',
  standalone: true,
  styleUrl: './portfolio-img.component.css',
  templateUrl: './portfolio-img.component.html'
})
export class AtomPortfolioImgComponent {
  imageUrl = 'https://raw.githubusercontent.com/Soppinha/my-icons/refs/heads/main/portifolio/images/meu-portfolio.svg';
}
