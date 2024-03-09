import { prisma } from "../../database/prisma";
import { carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mocks";
import { request } from "../utils/request";

describe("Integration test: update car", () => {
	it("should be able to update a car successfully.", async () => {
		const car = await prisma.car.create({ data: carCreateBodyMock });

		const updatedCar = { ...car, ...carUpdateBodyMock };

		const data = await request
			.patch(`/cars/${car.id}`)
			.send(carUpdateBodyMock)
			.expect(200)
			.then((response) => response.body);

		expect(data.id).toBeDefined();
		expect(data).toMatchObject(updatedCar);
	});

	it("should throw a error for wrong car id.", async () => {
		await request.patch("/cars/999").expect(404);

	});
});
