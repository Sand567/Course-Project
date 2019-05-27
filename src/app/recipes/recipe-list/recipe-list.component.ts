import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test recipe", "This is simply a test recipe", "https://images-gmi-pmc.edge-generalmills.com/2acc07c5-d18e-4157-82b4-da96865f1f00.jpg"),
    new Recipe("Test recipe", "This is simply a test recipe", "https://images-gmi-pmc.edge-generalmills.com/2acc07c5-d18e-4157-82b4-da96865f1f00.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
