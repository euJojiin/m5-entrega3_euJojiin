import { injectable } from "tsyringe";
import {
	TCar,
	TRegisterCar,
	TUpdateCar,
	carSchema,
} from "../schemas/car.schema";
import { prisma } from "../database/prisma";

@injectable()
export class CarServices {
	async registerCar(body: TRegisterCar): Promise<TCar> {
		const data = await prisma.car.create({ data: body });

		return carSchema.parse(data);
	}

	async findManyCars(): Promise<TCar[]> {
		const data = await prisma.car.findMany();
		return carSchema.array().parse(data);
	}

	findOneCar(car: TCar): TCar {
		return car;
	}

	async updateCar(id: string, body: TUpdateCar): Promise<TCar> {
		const data = await prisma.car.update({ where: { id }, data: body });

		return carSchema.parse(data);
	}

	async deleteCar(id: string): Promise<void> {
		await prisma.car.delete({ where: { id } });
	}
}
