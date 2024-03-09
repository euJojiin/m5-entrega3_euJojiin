export const carCreateBodyMock = {
	name: "Car name1",
	description: "Car description1",
	brand: "Car brand1",
	year: 2023,
	km: 10000,
};

export const wrongCarCreateBodyMock = {
	name: "Car name1",
	description: "Car description1",
	brand: "Car brand1",
	year: 2023,
    km: ""
};

export const carUpdateBodyMock = {
	km: 20000,
};

export const carMock = {
	id: "db35150f-b6b4-4876-8436-c970a2fa22fe",
	name: "Car name1",
	description: "Car description1",
	brand: "Car brand1",
	year: 2023,
	km: 10000,
};

export const wrongCarMock = {
	id: "db35150f-b6b4-4876-8436-c970a2fa22f1",
	name: "Car name1",
	description: "Car description1",
	brand: "Car brand1",
	year: 2023,
	km: 10000,
};

export const carListMock = [
	{
		id: "db35150f-b6b4-4876-8436-c970a2fa22fe",
		name: "Car name1",
		description: "Car description1",
		brand: "Car brand1",
		year: 2023,
		km: 10000,
	},
	{
		id: "db35150f-b6b4-4876-8436-c970a2fa22f0",
		name: "Car name2",
		description: "Car description2",
		brand: "Car brand2",
		year: 2023,
		km: 10000,
	},
];

export const carCreateBodyListMock = [
	{
		name: "Car name1",
		description: "Car description1",
		brand: "Car brand1",
		year: 2023,
		km: 10000,
	},
	{
		name: "Car name2",
		description: "Car description2",
		brand: "Car brand2",
		year: 2023,
		km: 10000,
	},
];
