import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExistis = this.specificationRepository.findByName(name);

    if (specificationAlreadyExistis) throw new Error("Specification already existis");

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
