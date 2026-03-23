# Propuesta 2 — Corporate site (Next.js 14)

Sitio corporativo moderno con estilo premium minimalista.

## Stack

- Next.js 14 (App Router)
- React
- TailwindCSS
- Framer Motion

## Correr en local

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

## Assets (parte superior de la página)

- **`public/doctor.jpg`**: foto del doctor (columna izquierda del hero).
- **`public/logo.png`**: logo personalizado (ej. CS / Urología). Si no existe, se muestra un placeholder.
- **`public/hospital.jpg`**: imagen del hospital o consultorio (columna derecha del hero).

## Imágenes por especialidad

En **`public/especialidades/`** puedes colocar una imagen por especialidad para que los visitantes vean de forma ilustrativa el tipo de problemas que se atienden:

- `endourologia.jpg`
- `oncologia.jpg`
- `cirugia-laparoscopica.jpg`
- `laser.jpg`
- `cirugia-robotica.jpg`

Si falta alguna, se muestra un placeholder con el nombre del archivo a añadir.
