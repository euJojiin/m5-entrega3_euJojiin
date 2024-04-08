import "reflect-metadata";
import { CarServices } from "../../services/car.services";
import { carCreateBodyMock, carMock} from "../__mocks__/car.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: register car", () => {
	const carServices = new CarServices();
    
    it("should work correctly.", async () => {

		prismaMock.car.create.mockResolvedValue(carMock);
		const data = await carServices.registerCar(carCreateBodyMock);

		expect(data).toStrictEqual(carMock);
	});
});
