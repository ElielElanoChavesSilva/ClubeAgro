import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  curtidas: number = 799;
  verif: boolean = false;
  teste: boolean = false;

  curtir(): void {
    this.verif = !this.verif
    if (this.verif) {
      this.curtidas++
    } else {
      this.curtidas--
    }
  }

  active(): void{
    this.teste = !this.teste
  }
}
