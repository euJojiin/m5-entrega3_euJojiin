import { prisma } from "../../database/prisma";
import { carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mocks";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
	it("should be able to delete a car successfully.", async () => {
		const car = await prisma.car.create({ data: carCreateBodyMock });

		await request
			.delete(`/cars/${car.id}`)
			.expect(204)
	});

	it("should throw a error for wrong car id.", async () => {
		await request.delete("/cars/999").expect(404);

	});
});
