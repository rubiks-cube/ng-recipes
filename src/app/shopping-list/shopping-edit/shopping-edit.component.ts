import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
 subscription: Subscription;
 editMode = false;
 editedItemIndex;
 editedItem;


  constructor(private shoppingListService: ShoppingListService) { }

  onAddOrUpdateItem(form: NgForm) {
  const newIngredient = new Ingredient(form.value.name, form.value.amount);
  if (this.editMode) {
    this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
  } else {
  this.shoppingListService.addIngredient(newIngredient);
  }
  this.editMode = false;
  form.reset();

  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }


  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }


  ngOnInit() {
   this.subscription = this.shoppingListService.startedEditing.subscribe((index: number ) => {
     this.editedItemIndex = index;
     this.editMode = true;
     this.editedItem = this.shoppingListService.getIngredient(index);
     this.slForm.setValue({
       name: this.editedItem.name,
       amount: this.editedItem.amount
     });
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
