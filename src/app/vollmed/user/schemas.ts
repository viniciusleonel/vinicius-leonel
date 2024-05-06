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

export const createMedicoSchema = z.object({
    nome: z.string()
        .min(1, 'Nome obrigatório!'),

    email: z.string()
        .min(1, 'Email obrigatório!')
        .email('Digite um email válido!')
        .toLowerCase(),

    telefone: z.string()
        .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Insira um telefone válido!'),

    crm: z.string()
        .regex(/^\d{4,6}$/, 'Insira um CRM válido!'),

    especialidade: z.string()
        .min(1, 'Escolha uma especialidade'),

    endereco: z.object({
        logradouro: z.string()
            .min(1, 'Logradouro obrigatório!'),

        bairro: z.string()
            .min(1, 'Bairro obrigatório!'),

        cep: z.string()
            .regex(/^\d{8}$/, 'Insira um CEP válido!'),

        cidade: z.string()
            .min(1, 'Cidade obrigatória!'),

        uf: z.string()
            .min(1, 'UF obrigatório!'),

        numero: z.string()
        .min(1, 'Insira um número!'),

        complemento: z.string().optional()
    })
});

export type CreateUserFormData = z.infer<typeof createUserSchema>;
export type LoginUserFormData = z.infer<typeof loginSchema>;
export type CreateMedicoFormData = z.infer<typeof createMedicoSchema>;