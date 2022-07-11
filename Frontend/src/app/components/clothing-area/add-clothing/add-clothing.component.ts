import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClothingModel } from 'src/app/models/clothing-model';
import { ClothingTypeModel } from 'src/app/models/clothing-types-model';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
    selector: 'app-add-clothing',
    templateUrl: './add-clothing.component.html',
    styleUrls: ['./add-clothing.component.css']
})
export class AddClothingComponent implements OnInit {

    public clothingTypes: ClothingTypeModel[]
    public clothing = new ClothingModel();

    constructor(private clothingService: ClothingService, private router: Router) { }

    async ngOnInit() {
        try {
            this.clothingTypes = await this.clothingService.getAllClothingTypes()
        }
        catch (err: any) {
            alert(err.message)
        }
    }

    async send() {
        try {
            await this.clothingService.addClothing(this.clothing);
            alert("Clothing has been added.")
            this.router.navigateByUrl("/clothing")

        }
        catch (err: any) {
            alert(err.message)
        }
    }

}
