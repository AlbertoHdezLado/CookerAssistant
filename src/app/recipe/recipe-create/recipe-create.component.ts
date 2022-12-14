import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent {
  enteredTitle = "";
  enteredDescription = "";
  enteredIngredients = "";
  enteredInstructions = "";

  constructor(public recipesService: RecipesService) {}

  onAddRecipe(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.recipesService.addRecipe(form.value.title, form.value.description, form.value.ingredients, form.value.instructions);
    form.resetForm();
  }
}
