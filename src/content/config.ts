import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(), // 'Mechatronics' or 'Software'
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    image: z.string().optional(), // Nueva ruta para la imagen del proyecto
  }),
});

export const collections = {
  projects,
};
