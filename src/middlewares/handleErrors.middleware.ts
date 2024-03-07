import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { ZodError } from "zod";

export class HandleErrors {
	static execute(
		error: Error,
		_req: Request,
		res: Response,
		_next: NextFunction
	) {
		if (error instanceof AppError) {
			return res
				.status(error.statusCode)
				.json({ message: error.message });
		}

		if (error instanceof ZodError) {
			return res.status(400).json({ error: error.errors });
		}

		console.log(error);
		return res.status(500).json({ message: "Internal server error" });
	}
}
