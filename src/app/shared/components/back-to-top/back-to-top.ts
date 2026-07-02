import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-back-to-top',
    imports: [CommonModule],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css',
})
export class BackToTop {
   visible = false;

  @HostListener('window:scroll')
  onScroll() {
    this.visible = window.scrollY > 500;
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
