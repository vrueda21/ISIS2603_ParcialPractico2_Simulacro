import { RecipeModule } from './recipe/recipe.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { Recipe } from './recipe/Recipe';


const routes: Routes = [

  { path: '', redirectTo: 'recipes', pathMatch: 'full' },

  //{path: 'recipes', loadChildren: () => import('./recipe/recipe.module').then((m)=> m.RecipeModule),},

  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
