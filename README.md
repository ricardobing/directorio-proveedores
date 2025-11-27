# 🎉 Directorio de Proveedores de Eventos

Plataforma web tipo marketplace para conectar proveedores de eventos con clientes. Desarrollada con **Next.js 14**, **React 18** y **TailwindCSS**.

## 🚀 Demo para Cliente

Este es un **proyecto demo funcional** listo para presentar a clientes que buscan un directorio de proveedores similar a un marketplace.

### ✨ Características Principales

- ✅ **Home Page** con hero, búsqueda y categorías
- ✅ **Listado de Proveedores** con filtros (búsqueda, categoría, ciudad)
- ✅ **Páginas Individuales** de cada proveedor con toda su información
- ✅ **Sistema de Login/Registro** (mock - frontend only)
- ✅ **Panel de Proveedor** con estadísticas y gestión
- ✅ **10 Proveedores Mock** con datos reales y completos
- ✅ **Diseño Responsive** - se ve perfecto en móvil, tablet y desktop
- ✅ **Listo para Deploy** en Vercel en 2 minutos

## 📦 Instalación

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

### Pasos de Instalación

```bash
# 1. Navegar al directorio del proyecto
cd directorio-proveedores

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

El proyecto estará disponible en: **http://localhost:3000**

## 🗂️ Estructura del Proyecto

```
directorio-proveedores/
├── app/
│   ├── layout.jsx              # Layout principal con Header/Footer
│   ├── page.jsx                # Home page
│   ├── globals.css             # Estilos globales
│   ├── proveedores/
│   │   ├── page.jsx            # Listado de proveedores
│   │   └── [id]/page.jsx       # Página individual de proveedor
│   ├── login/page.jsx          # Página de login
│   ├── register/page.jsx       # Página de registro
│   └── panel/page.jsx          # Panel del proveedor
├── components/
│   ├── Header.jsx              # Navegación principal
│   ├── Footer.jsx              # Footer con links
│   ├── Hero.jsx                # Sección hero del home
│   ├── SearchBar.jsx           # Barra de búsqueda
│   ├── FeaturedProviders.jsx   # Proveedores destacados
│   ├── Categories.jsx          # Grid de categorías
│   ├── CallToAction.jsx        # CTA para proveedores
│   └── ProviderCard.jsx        # Card de proveedor (reutilizable)
├── lib/
│   ├── mockData.js             # 10 proveedores mock con datos completos
│   └── constants.js            # Categorías y ciudades
├── tailwind.config.js          # Configuración de Tailwind
├── next.config.js              # Configuración de Next.js
└── package.json                # Dependencias del proyecto
```

## 🎨 Paleta de Colores

- **Primary (Azul)**: #3B82F6
- **Secondary (Morado)**: #8B5CF6
- **Acentos**: Amarillo para ratings y elementos destacados

## 📱 Páginas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Home con hero, búsqueda, proveedores destacados y categorías |
| `/proveedores` | Listado completo con filtros de búsqueda, categoría y ciudad |
| `/proveedores/[id]` | Perfil individual de proveedor con servicios y contacto |
| `/login` | Página de inicio de sesión (mock) |
| `/register` | Registro de nuevo proveedor (mock) |
| `/panel` | Panel administrativo del proveedor (mock) |

## 🔐 Sistema de Autenticación (Mock)

**IMPORTANTE**: Este es un sistema mock (solo frontend) para demostración.

- Cualquier email/password permite hacer login
- Los datos se guardan en `localStorage`
- NO hay validación real de backend
- Perfecto para demos y presentaciones

Para convertir en producción necesitarás:
- Backend con API de autenticación (NextAuth, Supabase, Firebase, etc.)
- Base de datos real (PostgreSQL, MongoDB, etc.)
- Hash de contraseñas y tokens JWT

## 🌐 Deploy en Vercel (2 minutos)

### Opción 1: Deploy desde GitHub

1. Sube el código a GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/directorio-proveedores.git
git push -u origin main
```

2. Ve a [vercel.com](https://vercel.com)
3. Click en "New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente Next.js
6. Click en "Deploy"
7. ¡Listo! Tu sitio estará en vivo en ~1 minuto

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

## 📝 Datos Mock Incluidos

El proyecto incluye **10 proveedores completos** con:

- ✅ Nombre y descripción detallada
- ✅ Categoría (Catering, Fotografía, DJ, Decoración, etc.)
- ✅ Ciudad (8 ciudades mexicanas)
- ✅ Rating y número de reseñas
- ✅ Precio orientativo
- ✅ Lista de servicios
- ✅ Imagen de perfil (Unsplash)
- ✅ Redes sociales (Website, Facebook, Instagram, WhatsApp)

### Categorías Disponibles:
1. Catering
2. Fotografía
3. Música y DJ
4. Decoración
5. Salón de Eventos
6. Pasteles y Postres
7. Animación
8. Floristería
9. Mobiliario
10. Iluminación y Sonido

### Ciudades:
Mérida, Ciudad de México, Guadalajara, Monterrey, Cancún, Playa del Carmen, Puebla, Querétaro

## 🛠️ Personalización

### Cambiar Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#TU_COLOR',
    light: '#TU_COLOR_CLARO',
    dark: '#TU_COLOR_OSCURO',
  }
}
```

### Agregar más Proveedores

Edita `lib/mockData.js` y agrega objetos al array `providers`:

```javascript
{
  id: 'id-unico',
  name: 'Nombre del Proveedor',
  category: 'categoria',
  city: 'Ciudad',
  description: 'Descripción...',
  // ... más campos
}
```

### Agregar Categorías

Edita `lib/constants.js`:

```javascript
export const CATEGORIES = [
  { value: 'nueva-categoria', label: 'Nueva Categoría' },
  // ...
]
```

## 📊 Características del Panel de Proveedor

- ✅ Estadísticas en tiempo real (visitas, contactos, rating)
- ✅ Acciones rápidas (editar perfil, subir fotos, ver estadísticas)
- ✅ Lista de contactos recientes
- ✅ Consejo del día
- ✅ Información del plan actual

## 🚧 Próximos Pasos para Producción

Para convertir este demo en una aplicación de producción:

1. **Backend y Base de Datos**
   - Implementar API con Next.js API Routes
   - Conectar base de datos (Supabase, Firebase, PostgreSQL)
   - Migrar datos mock a DB real

2. **Autenticación Real**
   - Implementar NextAuth.js o similar
   - Hash de contraseñas con bcrypt
   - Tokens JWT y sesiones seguras

3. **Funcionalidades Adicionales**
   - Sistema de reseñas y ratings real
   - Chat entre cliente y proveedor
   - Pasarela de pagos (Stripe, PayPal)
   - Dashboard con analytics real
   - Upload de imágenes (Cloudinary, S3)

4. **SEO y Performance**
   - Metadata dinámica por página
   - Sitemap.xml automático
   - Optimización de imágenes
   - Cache strategies

## 📄 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar build de producción
npm start

# Linting
npm run lint
```

## 💡 Casos de Uso

Este proyecto es ideal para:

- ✅ Presentación a clientes (demo funcional)
- ✅ Base para proyecto real de marketplace
- ✅ Portafolio de desarrollador
- ✅ Propuesta de Workana/Freelance
- ✅ MVP para validar idea de negocio

## 🤝 Soporte

Para preguntas o personalizaciones, contacta al desarrollador.

## 📜 Licencia

Este es un proyecto demo. Puedes usarlo y modificarlo libremente para tus proyectos.

---

**Desarrollado con ❤️ usando Next.js 14, React 18 y TailwindCSS**

🚀 **¡Listo para impresionar a tu cliente!**
