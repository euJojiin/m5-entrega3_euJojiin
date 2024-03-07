import { container } from "tsyringe";
import { CarServices } from "../../services/car.services";
import { CarControllers } from "../../controllers/car.controllers";

container.registerSingleton("CarServices", CarServices);
container.registerSingleton("CarControllers", CarControllers);
