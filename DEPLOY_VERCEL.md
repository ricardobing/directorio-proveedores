# 🚀 Deploy en Vercel - Instrucciones

## ✅ Proyecto Subido a GitHub

**Repositorio:** https://github.com/ricardobing/directorio-proveedores

---

## 🌐 Pasos para Deploy en Vercel

### 1. Ir a Vercel

Abre tu navegador y ve a: **https://vercel.com**

### 2. Hacer Login

- Click en "Login" o "Sign Up"
- Usa tu cuenta de GitHub (recomendado)

### 3. Nuevo Proyecto

- Click en el botón **"Add New..."** (esquina superior derecha)
- Selecciona **"Project"**

### 4. Importar Repositorio

- Vercel mostrará tus repos de GitHub
- Busca: **directorio-proveedores**
- Click en **"Import"**

### 5. Configuración (Auto-detectada)

Vercel detectará automáticamente:
- ✅ Framework: **Next.js**
- ✅ Build Command: `next build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**NO necesitas cambiar nada.**

### 6. Variables de Entorno (Opcional)

Este proyecto NO requiere variables de entorno para funcionar.

Si en el futuro agregas APIs, puedes añadirlas en:
- **Environment Variables** → Add

### 7. Deploy

- Click en el botón azul **"Deploy"**
- Espera 1-2 minutos mientras Vercel:
  - Clona tu repo
  - Instala dependencias
  - Hace el build
  - Despliega el sitio

### 8. ¡Listo! 🎉

Cuando termine verás:
- ✅ Confetti animation
- ✅ Tu URL pública: `https://directorio-proveedores.vercel.app`
- ✅ Botón "Visit" para abrir el sitio

---

## 📱 URL del Sitio Deployado

Tu sitio estará disponible en:
```
https://directorio-proveedores.vercel.app
```

O un dominio similar que Vercel asigne.

---

## 🔄 Updates Automáticos

**¡Importante!** Cada vez que hagas `git push` a la rama `main`:
- Vercel detectará el cambio
- Hará un nuevo deploy automáticamente
- Tu sitio se actualizará en ~1 minuto

---

## 🛠️ Configuración Avanzada (Opcional)

### Dominio Custom

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Add Domain → Escribe tu dominio
4. Sigue las instrucciones DNS

### Analytics

Vercel ofrece analytics gratis:
- Settings → Analytics → Enable

### Performance Monitoring

- Settings → Speed Insights → Enable

---

## ✅ Verificar Deploy

Después del deploy, verifica:

1. **Home page** - Hero, búsqueda, proveedores
2. **/proveedores** - Listado con filtros
3. **/proveedores/[id]** - Perfil individual
4. **/login** - Formulario de login
5. **/register** - Formulario de registro
6. **/panel** - Panel (después de login)

### Prueba en Móvil

Abre el sitio en tu teléfono para verificar responsive.

---

## 🚨 Si Algo Sale Mal

### Error en Build

Si el build falla:
1. Ve a la pestaña "Deployments"
2. Click en el deployment fallido
3. Ve a "Build Logs"
4. Lee el error
5. Corrige en tu código local
6. `git push` de nuevo

### Imágenes No Cargan

- Vercel optimiza imágenes automáticamente
- Si algunas no cargan, revisa las URLs en `lib/mockData.js`
- Asegúrate que las URLs de Unsplash sean accesibles

### Puerto 3004

El puerto solo aplica en desarrollo local.
En Vercel, el sitio usará puertos estándar (80/443) automáticamente.

---

## 📊 Panel de Vercel

En el dashboard de Vercel verás:
- **Overview** - Estado del proyecto
- **Deployments** - Historial de deployments
- **Analytics** - Visitas, performance
- **Settings** - Configuración avanzada
- **Logs** - Logs en tiempo real

---

## 💡 Tips

1. **Preview Deployments**: Cada branch que crees tendrá su propio preview URL
2. **Rollback**: Puedes volver a versiones anteriores desde "Deployments"
3. **Custom 404**: El proyecto ya tiene una página 404 automática
4. **SEO**: Next.js genera metadata automáticamente para SEO

---

## 🎯 Para Presentar al Cliente

Comparte esta información:

**URL del Proyecto:** https://directorio-proveedores.vercel.app

**Repo GitHub:** https://github.com/ricardobing/directorio-proveedores

**Características:**
- ✅ Deploy automático en cada update
- ✅ HTTPS gratuito y automático
- ✅ CDN global (carga rápida en todo el mundo)
- ✅ Optimización automática de imágenes
- ✅ Analytics incluidos
- ✅ 99.9% uptime

---

## 📞 Soporte

- **Documentación Vercel**: https://vercel.com/docs
- **Comunidad Next.js**: https://nextjs.org/docs
- **Issues GitHub**: En tu repo

---

**🚀 ¡Tu sitio está en vivo y listo para impresionar!**

---

## 🔗 Links Rápidos

- 🌐 Sitio en Vivo: https://directorio-proveedores.vercel.app
- 📁 GitHub: https://github.com/ricardobing/directorio-proveedores
- ⚙️ Vercel Dashboard: https://vercel.com/dashboard
- 📖 Docs Next.js: https://nextjs.org/docs

---

**Tiempo total de deploy: ~2 minutos** ⏱️
