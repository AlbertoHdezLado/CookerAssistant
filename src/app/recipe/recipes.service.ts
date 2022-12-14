import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];
  private recipesUpdated = new Subject<Recipe[]>();

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeUpdateListener() {
    return this.recipesUpdated.asObservable();
  }

  addRecipe(title: string, description: string, ingredients: string, instructions: string) {
    const recipe: Recipe = {
      title: title,
      description: description,
      ingredients: ingredients,
      instructions: instructions};
    this.recipes.push(recipe);
    this.recipesUpdated.next([...this.recipes]);
  }
}
