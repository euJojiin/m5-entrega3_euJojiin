import { Router } from "express";
import { container } from "tsyringe";
import { CarControllers } from "../controllers/car.controllers";
import { EnsureMiddleware } from "../middlewares/ensure.middleware";
import { carRegisterSchema, carUpdateSchema } from "../schemas/car.schema";

export const carRouter = Router();

const carControllers = container.resolve(CarControllers);

carRouter.post(
	"/",
	EnsureMiddleware.validateBody(carRegisterSchema),
	carControllers.registerCar.bind(carControllers)
);
carRouter.get("/", carControllers.findManyCars.bind(carControllers));

carRouter.use(
	"/:id",
	EnsureMiddleware.paramsIdExists({
		error: "Car not found.",
		model: "car",
		searchKey: "id",
	})
);

carRouter.get("/:id", carControllers.findOneCar.bind(carControllers));
carRouter.patch(
	"/:id",
	EnsureMiddleware.validateBody(carUpdateSchema),
	carControllers.updateCar.bind(carControllers)
);
carRouter.delete("/:id", carControllers.deleteCar.bind(carControllers));
