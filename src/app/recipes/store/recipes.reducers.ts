import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipes.actions';
import * as fromApp from '../../store/app.reducers';


export interface RecipeFeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const intialState: State = {
    recipes: [
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
      ]
};


export  function  recipesReducer(state = intialState, action: RecipeActions.RecipeActions) {
      switch (action.type) {
          case RecipeActions.SET_RECIPES:
             return {
                 ...state,
                 recipes: [...action.payload]
             };

             case RecipeActions.ADD_RECIPE:
             return {
               ...state,
               recipes: [...state.recipes, action.payload]
             };

             case RecipeActions.UPDATE_RECIPE:
             const recipe = state.recipes[action.payload.index];
             const updatedRecipe = {
                 ...recipe,
                ... action.payload.updatedRecipe
             };
             const recipes = [...state.recipes];
             recipes[action.payload.index] = updatedRecipe;
             return {
               ...state,
               recipes: recipes
             };

             case RecipeActions.DELETE_RECIPE:
             const oldRecipes = [...state.recipes];
             oldRecipes.splice(action.payload, 1);
             return {
               ...state,
               recipes: oldRecipes
             };

          default :
          return state;
      }
}
