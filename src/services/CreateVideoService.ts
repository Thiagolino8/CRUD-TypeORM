import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

export class CreateVideoService {
	async execute(name: string, description: string, duration: number, category_id: string) {
		const repo = getRepository(Video);
    const repoCategory = getRepository(Category);
    if (!(await repoCategory.findOne(category_id))) {
      return new Error('Category does not exists!');
    }

		const video = repo.create({
			name,
			description,
			duration,
			category_id
		});
		await repo.save(video);
		return video;
	}
}
