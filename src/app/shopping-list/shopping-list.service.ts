import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing  = new Subject<number>();

 private ingredients: Ingredient[] = [
    new Ingredient('chicken', 10),
    new Ingredient('chicn', 9)
  ];


  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
   }

   getIngredient(index: number) {
    return this.ingredients[index];
   }

   addIngredient(ingredient: Ingredient) {
     this.ingredients.push(ingredient);
     this.ingredientsChanged.next(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]) {
     this.ingredients.push(...ingredients);
     this.ingredientsChanged.next(this.ingredients.slice());
   }

   updateIngredient(index: number, newIng: Ingredient) {
    this.ingredients[index] = newIng;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
    }

}
