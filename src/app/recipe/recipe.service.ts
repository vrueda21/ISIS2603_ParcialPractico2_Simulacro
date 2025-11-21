import { Injectable } from '@angular/core';
import {Recipe} from './Recipe';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl: string = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas';
  //private detail: string = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/1/recipe.json';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe []>{
    return this.http.get<Recipe [] >(this.apiUrl+'/recipe.json');
  }


  getRecipeDetail(id: string): Observable <Recipe> {
    return this.http.get<Recipe >(this.apiUrl+'/'+id+'/recipe.json');
  }

}
