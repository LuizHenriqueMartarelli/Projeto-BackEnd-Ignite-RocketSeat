import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesCotroller = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesCotroller };
