import express, { Request, Response, NextFunction } from "express";
import ClothingModel from "../4-models/clothing-model";
import logic from "../5-logic/clothing-logic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/clothing
router.get("/clothing", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const clothing = await logic.getAllClothing();
        response.json(clothing);
    }
    catch(err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/clothing
router.post("/clothing", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const clothing = new ClothingModel(request.body);
        const addedClothing = await logic.addClothing(clothing);
        response.status(201).json(addedClothing);
    }
    catch(err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/clothing-types
router.get("/clothing-types", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const clothingTypes = await logic.getAllClothingTypes();
        response.json(clothingTypes);
    }
    catch(err: any) {
        next(err);
    }
});

export default router;
