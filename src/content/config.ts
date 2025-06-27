import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";


const reinas = defineCollection({
  schema: z.object({
    // 🏷️ Información general
    nombreCorto: z.string(),
    nombreCompleto:z.string(),
    barrio: z.string(),
    edad: z.number(),
    profesion: z.string(),

    // 🖼️ Imágenes
    imagenPrincipal: z.string(),
    galeria: z.array(z.string()),

    // 📲 Redes sociales
    redesSociales: z.object({
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
      tiktok: z.string().url().optional(),
    }).optional(),

  }),
});

const programacion = defineCollection({
  schema: z.object({
    // 🔢 Identificador único
    id: z.number(),

    // 📝 Información del evento
    title: z.string(),
    activities: z.string(),

  }),
});


const agencias = defineCollection({
  schema: z.object({
    // 🏢 Información general
    title: z.string(),
    direccion: z.string(),
    telefono: z.string(),

    // 📝 Descripción
    descripcion: z.string(),

    // 📷 Imagen principal
    imagen: z.string(),
  }),
});




const hospedajes = defineCollection({
  schema: z.object({
    // 🏨 Información general
    title: z.string(),
    tipo: z.string(),
    direccion: z.string(),
    telefono: z.string(),
    horarioAtencion: z.string(),

    // 📝 Descripciones
    descripcion: z.string(),
    descripcionLong: z.string(),

    // 📷 Imágenes
    imagen: z.string(),
    galeria: z.array(z.string()),

    // 🌐 Redes sociales
    redesSociales: z.object({
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
    }).optional(),
  }),
});


const sponsors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    logo1: z.string(),
    logo2: z.string()
  })
});
export const collections = { reinas, programacion, agencias, hospedajes, sponsors };