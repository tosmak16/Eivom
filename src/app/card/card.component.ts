import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../shared/movie.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movie: IMovie

  constructor() { }

  ngOnInit() {
  }

}
