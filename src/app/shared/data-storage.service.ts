import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeRecipe: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://recipe-app-3393.firebaseio.com/recipes.json?auth=' + token, this.recipeRecipe.getRecipes());
  }

  getRecipes() {

    const token = this.authService.getToken();
   this.http.get('https://recipe-app-3393.firebaseio.com/recipes.json?auth=' + token)
   .map((response: Response ) => {
    const recipes: Recipe[] = response.json();
    for (const recipe of recipes) {
      if (!recipe['ingredients']) {
        recipe['ingredients'] = [];
      }
    }
    return recipes;
   })
    .subscribe((recipes: Recipe[] ) => {

         this.recipeRecipe.setRecipes(recipes);
    });
  }

}
