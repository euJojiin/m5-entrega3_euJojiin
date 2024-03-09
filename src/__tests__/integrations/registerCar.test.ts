import {
	carCreateBodyMock,
	wrongCarCreateBodyMock,
} from "../__mocks__/car.mocks";
import { request } from "../utils/request";

describe("Integration test: register car", () => {

	it("should be able to register a car successfully.", async () => {
		const data = await request
			.post("/cars")
			.send(carCreateBodyMock)
			.expect(201)
			.then((response) => response.body);

		expect(data.id).toBeDefined();
		expect(data).toMatchObject(carCreateBodyMock);
	});

	it("should throw a error for wrong register car body.", async () => {
		await request.post("/cars").send(wrongCarCreateBodyMock).expect(400);
	});
});
