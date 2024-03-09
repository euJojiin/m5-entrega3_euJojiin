import "reflect-metadata";
import { CarServices } from "../../services/car.services";
import { carMock} from "../__mocks__/car.mocks";

describe("Unit test: delete one car", () => {
	const carServices = new CarServices();
    
    it("should work correctly.", async () => {

        await carServices.deleteCar(carMock.id)
	});
});