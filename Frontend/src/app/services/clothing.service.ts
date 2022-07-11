import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClothingModel } from '../models/clothing-model';
import { ClothingTypeModel } from '../models/clothing-types-model';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  constructor(private http: HttpClient) { }

  public async getAllClothing(): Promise<ClothingModel[]> {
    const products = await firstValueFrom(this.http.get<ClothingModel[]>(environment.clothingUrl))
    return products;
  }

  public async addClothing(clothing: ClothingModel): Promise<void> {
    const addedClothing = await firstValueFrom(this.http.post<ClothingModel>(environment.clothingUrl, clothing))
    console.log(addedClothing);
  }

  public async getAllClothingTypes(): Promise<ClothingTypeModel[]> {
    const clothingTypes = await firstValueFrom(this.http.get<ClothingTypeModel[]>(environment.clothingTypesUrl))
    return clothingTypes;
  }

//   public async deleteClothing(id: number): Promise<void> {
//     await firstValueFrom(this.http.delete<ClothingModel>(environment.clothingUrl + id))
//   }

}
