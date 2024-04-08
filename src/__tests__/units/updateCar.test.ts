import "reflect-metadata";
import { CarServices } from "../../services/car.services";
import { carMock, carUpdateBodyMock} from "../__mocks__/car.mocks";
import { prismaMock } from "../__mocks__/prisma";
import { container } from "tsyringe";

describe("Unit test: update one car", () => {
	const carServices = container.resolve(CarServices);
    
    it("should work correctly.", async () => {

        const updatedCar = {...carMock, ...carUpdateBodyMock}

		prismaMock.car.update.mockResolvedValue(updatedCar);
		const data = await carServices.updateCar(carMock.id, carUpdateBodyMock)

		expect(data).toStrictEqual(updatedCar);
	});
});