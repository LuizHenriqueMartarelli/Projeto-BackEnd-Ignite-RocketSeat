import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";
import { CreateCategorieController } from "./CreateCategorieController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryCotroller = new CreateCategorieController(createCategoryUseCase);

export { createCategoryCotroller };
