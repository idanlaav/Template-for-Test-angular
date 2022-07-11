import { Component, OnInit } from '@angular/core';
import { ClothingModel } from 'src/app/models/clothing-model';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-clothing-list',
  templateUrl: './clothing-list.component.html',
  styleUrls: ['./clothing-list.component.css']
})
export class ClothingListComponent implements OnInit {

    public clothing: ClothingModel[];


  constructor(private clothingService: ClothingService) { }

  async ngOnInit() {
    try {
        this.clothing = await this.clothingService.getAllClothing()
      } 
      catch (err: any) {
          alert(err.message)
      }
  }

}
