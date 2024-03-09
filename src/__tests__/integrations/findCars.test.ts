import { prisma } from "../../database/prisma";
import { carCreateBodyListMock, carCreateBodyMock } from "../__mocks__/car.mocks";
import { request } from "../utils/request";

describe("Integration test: find many cars", () => {
	it("should be able to find many cars successfully.", async () => {
		await prisma.car.createMany({ data: carCreateBodyListMock });

		const data = await request
			.get("/cars")
			.expect(200)
			.then((response) => response.body);

		expect(data).toHaveLength(2);
		expect(data[0]).toMatchObject(carCreateBodyListMock[0])
		expect(data[1]).toMatchObject(carCreateBodyListMock[1])
	});
});

describe("Integration test: find one car", () => {
	it("should be able to find one car successfully.", async () => {
		const car = await prisma.car.create({ data: carCreateBodyMock });

		const data = await request
			.get(`/cars/${car.id}`)
			.expect(200)
			.then((response) => response.body);

		expect(data.id).toBeDefined();
		expect(data).toMatchObject(carCreateBodyMock);
	});

	it("should throw a error for wrong car id.", async () => {
		await request.get("/cars/999").expect(404);
	});
});
