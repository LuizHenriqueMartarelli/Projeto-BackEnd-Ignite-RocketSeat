import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategorieController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      this.createCategoryUseCase.execute({ name, description });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateCategorieController };
