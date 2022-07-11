import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import ClothingModel from "../4-models/clothing-model";
import ClothingTypeModel from "../4-models/clothing-type-model";
import { ValidationError } from "../4-models/error-models";

async function getAllClothing(): Promise<ClothingModel[]> {
    const sql = `SELECT clothing.* , clothingTypes.typeName
                 FROM clothing JOIN clothingTypes
                 ON clothing.typeId = clothingTypes.typeId`;
    const clothing = await dal.execute(sql);
    return clothing;
}

async function addClothing(clothing: ClothingModel): Promise<ClothingModel> {
    const errors = clothing.validatePost();
    if(errors) {
        throw new ValidationError(errors);
    }
    const sql = `INSERT INTO clothing
                 VALUES(DEFAULT, ${clothing.typeId}, ${clothing.price}, ${clothing.discount})`;
    const result: OkPacket = await dal.execute(sql);
    clothing.clothingId = result.insertId;
    return clothing;
}

async function getAllClothingTypes(): Promise<ClothingTypeModel[]> {
    const sql = `SELECT * FROM clothingTypes`;
    const clothingTypes = await dal.execute(sql);
    return clothingTypes;
}

export default {
    getAllClothing,
    addClothing,
    getAllClothingTypes
};
