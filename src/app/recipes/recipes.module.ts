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
        SharedModule
    ],
    providers: [AuthGuard]
})

export class RecipesModule {

}