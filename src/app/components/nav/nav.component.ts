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
  iconName: string = 'bookmark_border' 

  curtir(): void {
    this.verif = !this.verif
    if (this.verif) {
      this.curtidas++
    } else {
      this.curtidas--
    }
  }

  toggleIcon() {
    this.teste = !this.teste
    if(this.iconName === 'bookmark_border') {
      this.iconName = 'bookmark';
    } else {
      this.iconName = 'bookmark_border'
    }
  }
}
