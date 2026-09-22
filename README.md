# Barr & Day Coffee Co. — sitio web

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Desplegar

Este proyecto está listo para importarse directo en Vercel:
1. Sube este código a un repositorio de GitHub.
2. En vercel.com/new, importa el repositorio.
3. Vercel detecta Next.js automáticamente — no requiere configuración extra.
4. Conecta el dominio www.barranddaycoffee.com en Settings → Domains.

## Estructura

- `app/` — páginas (App Router de Next.js)
- `components/ui/` — piezas base (Button, Price...)
- `components/sections/` — bloques de página (Hero...)
- `styles/tokens.css` — fuente única de verdad para color, tipografía y movimiento

## Nota pendiente

Las fuentes se cargan hoy vía `@import` de Google Fonts en `app/globals.css`
como punto de partida rápido. Antes de lanzar, migrar a `next/font` con
self-hosting para cumplir el presupuesto de rendimiento definido
(LCP < 1.8s en 4G) — ver plan de desarrollo.
