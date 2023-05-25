import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  curtidas: number = 800;
  verif: boolean = true
  
  curtir(): void {
    this.verif = !this.verif

    if (this.verif) {
      this.curtidas++
    } else {
      this.curtidas--
    }
  }
}
