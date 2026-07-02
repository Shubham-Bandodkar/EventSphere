import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-newsletter',
 imports: [
    CommonModule,
    FormsModule
  ],  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter {
  email = '';

  subscribe() {

    if (!this.email.trim()) {
      alert('Please enter your email.');
      return;
    }

    alert(`Thanks for subscribing, ${this.email}!`);

    this.email = '';

  }
}
