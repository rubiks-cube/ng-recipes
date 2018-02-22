import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] ;
  subs: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

onNewRecipe() {
 this.router.navigate(['new'], {relativeTo: this.route});
}

  ngOnInit() {
   this.subs = this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }
  
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
