import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/dashboard'])
  }
}
