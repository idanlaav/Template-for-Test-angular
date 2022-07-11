import Joi from "joi";


class ClothingModel {
    
    public clothingId: number;
    public typeId: number
    public price: number;
    public discount: number;

    public constructor(clothing: ClothingModel) {
        this.clothingId = clothing.clothingId;
        this.typeId = clothing.typeId;
        this.price = clothing.price;
        this.discount = clothing.discount || 0;
    }

    private static postValidationSchema = Joi.object ({
        clothingId: Joi.forbidden(),
        typeId: Joi.number().required().integer().positive(),
        price: Joi.number().required().min(0).max(3000),
        discount: Joi.number().optional().integer().min(0).max(100)
    });

    public validatePost(): string {
        const result = ClothingModel.postValidationSchema.validate(this, {abortEarly: false});
        return result.error?.message;
    }
    
}


export default ClothingModel;
