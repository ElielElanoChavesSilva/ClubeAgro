import { CARDS } from './../../cards';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  iconName: string = 'bookmark_border' 

  cards = CARDS;
  
  curtir(card: any): void {
    card.Curtida = !card.Curtida;

    if(card.Curtida) {
       card.qtdCurtida++
    } else {
      card.qtdCurtida--
    }
  }

  toggleIcon(card: any) {
    card.favoritos = !card.favoritos
    
    if(this.iconName === 'bookmark_border' && card.favoritos) {
      this.iconName = 'bookmark';
    } else {
      this.iconName = 'bookmark_border'
    }
  }
}
