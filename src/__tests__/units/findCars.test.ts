import "reflect-metadata";
import { CarServices } from "../../services/car.services";
import { carListMock, carMock } from "../__mocks__/car.mocks";
import { prismaMock } from "../__mocks__/prisma";
import { container } from "tsyringe";

describe("Unit test: find many cars", () => {
	const carServices = container.resolve(CarServices);

	it("should work correctly.", async () => {
		prismaMock.car.findMany.mockResolvedValue(carListMock);
		const data = await carServices.findManyCars();

		expect(data).toHaveLength(2);
		expect(data[0]).toStrictEqual(carListMock[0]);
		expect(data[1]).toStrictEqual(carListMock[1]);
	});
});

describe("Unit test: find one car", () => {
	const carServices = container.resolve(CarServices);

	it("should work correctly.", async () => {
		prismaMock.car.findMany.mockResolvedValue(carListMock);
		const data = carServices.findOneCar(carMock);

		expect(data).toStrictEqual(carMock);
	});
});
