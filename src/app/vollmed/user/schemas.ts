import { z } from "zod"


export const createUserSchema = z.object({
    email: z.string()
    .min(1, 'Email obrigatório!')
    .email('Digite um email válido!')
    .toLowerCase(),

    password: z.string()
        .min(6, 'A senha precisa de no minimo 6 caracteres'),

    confirmPassword: z.string()
        .min(6, 'A senha precisa de no minimo 6 caracteres'),
    }).refine(
        (values) => {
            return values.password === values.confirmPassword;
        },
        {
            message: "As senhas precisam ser iguais!",
            path: ["confirmPassword"],
        }
    );

export const loginSchema = z.object({
    email: z.string()
    .min(1, 'Email obrigatório!')
    .email('Digite um email válido!')
    .toLowerCase(),

    password: z.string()
        .min(6, 'A senha precisa de no minimo 6 caracteres')
    }

    );

export type CreateUserFormData = z.infer<typeof createUserSchema>;
export type LoginUserFormData = z.infer<typeof loginSchema>;