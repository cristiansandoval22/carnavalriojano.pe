import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const reinas = defineCollection({
  schema: z.object({
    title: z.string(),
    barrio: z.string(),
    edad: z.number(),
    profesion: z.string(),
    imagenPrincipal: z.string(),
    galeria: z.array(z.string()),
    mensaje: z.string(),
    anio: z.number(),
    fechaPublicacion: z.string(),
  }),
});

const programacion = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    activities: z.string(),
    date: z.date(),
  }),
})

const agencias = defineCollection({
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    telefono: z.string(),
    direccion: z.string(),
    imagen: z.string(),
  }),
})


const hospedajes = defineCollection({
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    descripcionLong: z.string(),
    direccion: z.string(),
    telefono: z.string(),
    imagen: z.string(),
    horarioAtencion: z.string(),
  }),
})
export const collections = { reinas, programacion, agencias, hospedajes };