import { NgModule } from '@angular/core';


import {ReactiveFormsModule} from '@angular/forms';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { StoreModule } from '@ngrx/store';
import { recipesReducer } from './store/recipes.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './store/recipes.effects';




@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeStartComponent

    ],
    imports: [
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
        StoreModule.forFeature('recipes', recipesReducer),
        EffectsModule.forFeature([RecipeEffects])
    ],
    providers: [AuthGuard]
})

export class RecipesModule {

}