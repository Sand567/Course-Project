import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Mayo Rice", "This is simply a test recipe 1", "https://hispanickitchen.com/wp-content/uploads/2017/07/Ensalada-de-Pollo_1500-700x500.jpg"),
    new Recipe("Vegetable Biryani", "This is simply a test recipe 2", "https://www.kitchentreaty.com/wp-content/uploads/2015/11/biryani-inspired-autumn-vegetable-rice-with-butternut-squash-cauliflower-and-cashews5-700x500.jpg"),
    new Recipe("Chick peas and Rice", "This is simply a test recipe 3", "https://www.foodforfitness.co.uk/wp-content/uploads/2017/08/brazilian-picadillo-recipe-horizontal-e1504096062461-700x500.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeElement: Recipe) {
    this.recipeWasSelected.emit(recipeElement);
  }

}
