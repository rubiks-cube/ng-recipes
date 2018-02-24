import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as shoppingList from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromRecipe from '../store/recipes.reducers';
import * as RecipeActions from '../store/recipes.actions';

import { Observable } from 'rxjs/Observable';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  id: number;

  constructor(
  private route: ActivatedRoute, private router: Router,
  private store: Store<fromRecipe.RecipeFeatureState>) { }


  onAddToShoppingList() {
    this.store.select('recipes').pipe(take(1))
    .subscribe((recipeState: fromRecipe.State) => {
      this.store.dispatch(new shoppingList.AddIngredients(recipeState.recipes[this.id].ingredients));


    });

  }


  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);

  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
     this.recipeState = this.store.select('recipes');
    });
  }

}
