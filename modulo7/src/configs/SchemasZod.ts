import { z } from "zod";

// Zod schema for validating book data

const bookSchema = z.object({
  title: z.string().min(1, 'Campo obligatorio').min(3,'Minimo 3 caracteres').max(50,'Maximo 10 caracteres'),
  author: z.string().min(1,'Campo obligatorio').max(20,'Maximo 20 caracteres'),
  type: z.enum(['Tapa dura', 'Tapa blanda']),
  price: z.coerce.number().min(1,'Campo obligatorio').max(1000,'Maximo 1000'),
  photo: z.string().url('URL invalida').min(1,'Campo obligatorio'),
})

export default bookSchema