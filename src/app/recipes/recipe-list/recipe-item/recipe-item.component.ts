import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {  } from '@angular/core/src/event_emitter';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
@Input()index:number;

  constructor() { }


  
  ngOnInit() {
  }

}
