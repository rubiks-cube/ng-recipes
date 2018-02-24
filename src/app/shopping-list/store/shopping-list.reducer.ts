import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';


export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}


const intialState: State = {

    ingredients: [
        new Ingredient('chicken', 10),
        new Ingredient('fish', 9)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1

};

export function shoppingListReducer(state = intialState, action: ShoppingListActions.ShoppingListActions) {

   switch (action.type) {
       case ShoppingListActions.ADD_INGREDIENT:
       return {
           ...state,
           ingredients: [...state.ingredients, action.payload ]
          } ;


          case ShoppingListActions.ADD_INGREDIENTS:
          return {
              ...state,
              ingredients: [...state.ingredients, ...action.payload ]
          };

          case ShoppingListActions.UPDATE_INGREDIENT:
          const ingredient = state.ingredients[state.editedIngredientIndex];
          const updatedIngredient = {
              ...ingredient,
              ...action.payload.ingredient
          };
          const ingredients = [...state.ingredients];
          ingredients[state.editedIngredientIndex] = updatedIngredient;
          return {
              ...state,
              ingredients: ingredients,
              editedIngredient: null,
             editedIngredientIndex: -1
          };

          case ShoppingListActions.DELETE_INGREDIENT:
          const ingredientsDel = [...state.ingredients];
          ingredientsDel.splice(state.editedIngredientIndex, 1);
          return {
              ...state,
              ingredients: ingredientsDel,
              editedIngredient: null,
             editedIngredientIndex: -1
          };

          case ShoppingListActions.START_EDIT:
          const editedIngredient = state.ingredients[action.payload];
          return {
              ...state,
              editedIngredient: editedIngredient,
              editedIngredientIndex: action.payload
          };

          case ShoppingListActions.STOP_EDIT:
          return {
              ...state,
              editedIngredient: null,
              editedIngredientIndex: -1
          };

       default:
       return state;
   }

}

