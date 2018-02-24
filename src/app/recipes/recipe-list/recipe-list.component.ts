import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';

import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipes.reducers';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesState$: Observable<fromRecipe.State>;


  constructor( private router: Router,
     private route: ActivatedRoute , private store: Store<fromRecipe.RecipeFeatureState>) { }

onNewRecipe() {
 this.router.navigate(['new'], {relativeTo: this.route});
}

  ngOnInit() {
    this.recipesState$ = this.store.select('recipes');

  }

}
