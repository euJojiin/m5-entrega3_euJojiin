import { AnyZodObject } from "zod";
import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";
import {
	DynamicParamsIdFinder,
	PrismaClientGeneric,
} from "../interfaces/utils.interface";

export class EnsureMiddleware {
	static validateBody =
		(schema: AnyZodObject) =>
		(req: Request, res: Response, next: NextFunction) => {
			req.body = schema.parse(req.body);
			return next();
		};

	static paramsIdExists =
		({ error, model, searchKey }: DynamicParamsIdFinder) =>
		async (
			req: Request,
			res: Response,
			next: NextFunction
		): Promise<void> => {
			const id = req.params[searchKey];
			const client = prisma[model] as PrismaClientGeneric;

			const foundResource = await client.findFirst({
				where: { id },
			});

			if (!foundResource) {
				throw new AppError(404, error);
			}

			res.locals = { ...res.locals, foundResource };

			return next();
		};
}
