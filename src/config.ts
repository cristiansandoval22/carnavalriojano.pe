import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 👑 Reinas
const reinas = defineCollection({
  loader: glob({ pattern: "**/*.{json,yaml,yml}", base: "./src/content/reinas" }),
  schema: z.object({
    nombreCorto: z.string(),
    nombreCompleto: z.string(),
    barrio: z.string(),
    edad: z.number(),
    profesion: z.string(),

    imagenPrincipal: z.string(),
    galeria: z.array(z.string()),

    redesSociales: z
      .object({
        facebook: z.string().url().optional(),
        instagram: z.string().url().optional(),
        tiktok: z.string().url().optional(),
      })
      .optional(),
  }),
});

// 📅 Programación
const programacion = defineCollection({
  loader: glob({
    pattern: "**/*.{json,yaml,yml}",
    base: "./src/content/programacion",
  }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    activities: z.string(),
  }),
});

// 🚌 Agencias
const agencias = defineCollection({
  loader: glob({ pattern: "**/*.{json,yaml,yml}", base: "./src/content/agencias" }),
  schema: z.object({
    title: z.string(),
    direccion: z.string(),
    telefono: z.string(),
    descripcion: z.string(),
    imagen: z.string(),
  }),
});

// 🏨 Hospedajes
const hospedajes = defineCollection({
  loader: glob({
    pattern: "**/*.{json,yaml,yml}",
    base: "./src/content/hospedajes",
  }),
  schema: z.object({
    title: z.string(),
    tipo: z.string(),
    direccion: z.string(),
    telefono: z.string(),
    horarioAtencion: z.string(),

    descripcion: z.string(),
    descripcionLong: z.string(),

    imagen: z.string(),
    galeria: z.array(z.string()),

    redesSociales: z
      .object({
        facebook: z.string().url().optional(),
        instagram: z.string().url().optional(),
      })
      .optional(),
  }),
});

// 🤝 Sponsors
const sponsors = defineCollection({
  loader: glob({
    pattern: "**/*.{json,yaml,yml}",
    base: "./src/content/sponsors",
  }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    logo1: z.string(),
    logo2: z.string(),
  }),
});

export const collections = {
  reinas,
  programacion,
  agencias,
  hospedajes,
  sponsors,
};