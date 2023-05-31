import { Component } from '@angular/core';
import { CARDS } from 'src/app/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = CARDS;
  
  curtir(card: any): void {
    card.Curtida = !card.Curtida;

    if(card.Curtida) {
       card.Qtdcurtida++
    } else {
      card.Qtdcurtida--
    }
  }

  toggleIcon(card: any) {
    card.Favoritos = !card.Favoritos
    
    if(card.Icone === 'bookmark_border') {
      card.Icone = 'bookmark';
    } else {
      card.Icone = 'bookmark_border'
    }
  }
}
