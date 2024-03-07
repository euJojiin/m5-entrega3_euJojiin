import { inject, injectable } from "tsyringe";
import { CarServices } from "../services/car.services";
import { Request, Response } from "express";

@injectable()
export class CarControllers {
	constructor(@inject("CarServices") private carServices: CarServices) {}

	async registerCar({ body }: Request, res: Response) {
		const response = await this.carServices.registerCar(body);
		return res.status(201).json(response);
	}

	async findManyCars(_req: Request, res: Response) {
		const response = await this.carServices.findManyCars();
		return res.status(200).json(response);
	}

	async findOneCar(_req: Request, res: Response) {
		const car = res.locals.foundResource;

		const response = this.carServices.findOneCar(car);
		return res.status(200).json(response);
	}

	async updateCar(req: Request, res: Response) {
		const response = await this.carServices.updateCar(
			req.params.id,
			req.body
		);
		return res.status(200).json(response);
	}

	async deleteCar(req: Request, res: Response) {
		await this.carServices.deleteCar(req.params.id);
		return res.status(204).json();
	}
}
