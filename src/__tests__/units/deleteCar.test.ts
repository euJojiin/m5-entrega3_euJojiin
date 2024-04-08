import "reflect-metadata";
import { CarServices } from "../../services/car.services";
import { carMock } from "../__mocks__/car.mocks";
import { container } from "tsyringe";

describe("Unit test: delete one car", () => {
	const carServices = container.resolve(CarServices);

	it("should work correctly.", async () => {
		await carServices.deleteCar(carMock.id);
	});
});
