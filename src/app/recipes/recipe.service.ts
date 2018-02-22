import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RecipeService {
recipeChanged = new Subject<Recipe[]>();


 private recipes: Recipe[] = [
    new Recipe('test', 'this is a test',
     'http://images.media-allrecipes.com/userphotos/720x405/3922864.jpg',
     [
       new Ingredient('meat', 1),
       new Ingredient('me', 2)
     ]
    ),
    new Recipe('test3', 'this is ii test',
     'http://images.media-allrecipes.com/userphotos/720x405/3922864.jpg',
    [
      new Ingredient('fat', 8),
      new Ingredient('uii', 27)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());


  }

  getRecipes() {
   return  this.recipes.slice();
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());

  }

  deleteRecipe(index: number) {
   this.recipes.splice(index, 1);
   this.recipeChanged.next(this.recipes.slice());
  }


}
