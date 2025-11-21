import { RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { RecipeService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeId!: string;
  maxIngredient: any;
  @Input() recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  getRecipe():void{
    this.recipeService.getRecipeDetail(this.recipeId).subscribe((recipe) =>{
      this.recipe = recipe;

      if (this.recipe?.ingredientes?.length) {
        this.maxIngredient = this.recipe.ingredientes.reduce(
          (max: any, actual: any) =>
            Number(actual.cantidad) > Number(max.cantidad) ? actual : max
        );
      }
    } );
  }

  ngOnInit(): void {

    if (this.recipe === undefined){
      this.recipeId = this.route.snapshot.paramMap.get('id')!
      if (this.recipeId){
        this.getRecipe();
      }
    }
  }


}
