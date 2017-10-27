import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
title = 'Items available for Sale:';

items = ['Beer', 'Cigarettes', 'Good Times'];

}
