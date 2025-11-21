import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';


const routes: Routes = [
  {
    path: 'list',
    component: RecipeListComponent
  },
{
  path: ':id',
  component: RecipeDetailComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule{}
