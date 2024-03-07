import { z } from "zod";

export const carSchema = z.object({
	id: z.string(),
	name: z.string().min(1),
	description: z.string().optional(),
	brand: z.string().min(1),
	year: z.number().positive(),
	km: z.number().positive(),
});

export const carRegisterSchema = carSchema.omit({ id: true });

export const carUpdateSchema = carRegisterSchema.partial();

export type TCar = z.infer<typeof carSchema>;

export type TRegisterCar = z.infer<typeof carRegisterSchema>;

export type TUpdateCar = z.infer<typeof carUpdateSchema>;
