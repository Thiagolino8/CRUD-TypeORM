import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class UpdateCategoryService {
	async execute(id: string, name: string, description: string) {
		const repo = getRepository(Category);
		const category = await repo.findOne(id);
		if (!category) {
			return new Error('Category does not exists!');
		}
		category.name = name ? name : category.name;
		category.description = description ? description : category.description;
		await repo.save(category);
		return category;
	}
}
