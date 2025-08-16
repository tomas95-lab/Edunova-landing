# EduNova Landing Page

Landing page moderna y responsive para EduNova, construida con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño moderno y profesional** con paleta de colores azul
- **Totalmente responsive** (mobile, tablet, desktop)
- **SEO optimizado** con meta tags y structured data
- **Accesibilidad** con ARIA labels y focus management
- **Performance optimizado** con lazy loading y animaciones suaves
- **Captura de leads** integrada con Firestore
- **Micro-animaciones** y efectos hover
- **Modales interactivos** para CTAs

## 📁 Estructura del Proyecto

```
landing/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.tsx       # Navegación principal
│   │   ├── Footer.tsx       # Pie de página
│   │   ├── LeadForm.tsx     # Formulario de captura de leads
│   │   └── Modal.tsx        # Modal reutilizable
│   ├── sections/            # Secciones de la landing
│   │   ├── Hero.tsx         # Sección principal
│   │   ├── Features.tsx     # Características del producto
│   │   ├── HowItWorks.tsx   # Proceso de implementación
│   │   ├── Pricing.tsx      # Planes y precios
│   │   ├── FAQ.tsx          # Preguntas frecuentes
│   │   ├── CTA.tsx          # Call to action final
│   │   └── ...              # Otras secciones
│   ├── services/            # Servicios externos
│   │   └── firestore.ts     # Integración con Firestore
│   ├── copy.ts              # Contenido y textos
│   ├── LandingPage.tsx      # Componente principal
│   └── App.tsx              # Punto de entrada
├── index.html               # HTML principal con SEO
└── README_LANDING.md        # Este archivo
```

## 🎨 Paleta de Colores

- **Primario**: `#1e40af` (Azul)
- **Secundario**: `#4F8CFF` (Azul claro)
- **Acentos**: Verde emerald y púrpura suave
- **Fondos**: Grises claros y blancos
- **Texto**: Grises oscuros para contraste

## 🛠️ Tecnologías Utilizadas

- **React 19** con TypeScript
- **Tailwind CSS 4** para estilos
- **Lucide React** para iconografía
- **Vite** como bundler
- **Firestore** para captura de leads

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 📱 Responsive Design

La landing page está optimizada para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Funcionalidades Principales

### 1. Navegación
- Navbar sticky con blur en scroll
- Menú móvil accesible
- Enlaces a secciones internas
- CTAs destacados

### 2. Captura de Leads
- Formulario completo con validación
- Integración con Firestore
- Estados de loading y éxito
- Campos requeridos y opcionales

### 3. Secciones Interactivas
- Hero con gradiente animado
- Features con hover effects
- FAQ con acordeón expandible
- Pricing con planes destacados

### 4. CTAs y Modales
- Botones "Probar demo" y "Agendar llamada"
- Modales con formularios integrados
- Manejo de estados y navegación

## 🔧 Configuración

### Integración con Firestore

Para conectar con el proyecto principal:

1. Copiar la configuración de Firebase del proyecto MVP
2. Actualizar `src/services/firestore.ts`
3. Descomentar las líneas de Firestore
4. Configurar las reglas de seguridad

### SEO y Meta Tags

El `index.html` incluye:
- Meta tags completos
- Open Graph para redes sociales
- Twitter Cards
- Structured Data (JSON-LD)
- Canonical URL

### Analytics

Para agregar Google Analytics:

1. Agregar variable de entorno `VITE_GA_ID`
2. Implementar hook de analytics
3. Trackear eventos de conversión

## 📊 Métricas y Performance

### Lighthouse Score Objetivo
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Optimizaciones Implementadas
- Lazy loading de imágenes
- CSS crítico inline
- Preconnect a dominios externos
- Compresión de assets
- Cache headers optimizados

## 🎨 Personalización

### Modificar Colores
Editar variables CSS en `src/App.css`:
```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  /* ... */
}
```

### Cambiar Contenido
Editar `src/copy.ts` para modificar textos:
```typescript
export const landingCopy = {
  hero: {
    title: "Tu nuevo título",
    subtitle: "Tu nuevo subtítulo",
    // ...
  }
};
```

### Agregar Secciones
1. Crear componente en `src/sections/`
2. Importar en `LandingPage.tsx`
3. Agregar a la estructura del main

## 🚀 Deployment

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Construir proyecto
npm run build

# Deploy carpeta dist/
```

### Firebase Hosting
```bash
# Instalar Firebase CLI
npm i -g firebase-tools

# Inicializar y deploy
firebase init hosting
firebase deploy
```

## 🔍 Testing

```bash
# Ejecutar tests
npm test

# Coverage
npm run test:coverage
```

## 📝 Checklist de QA

- [ ] Landing accesible en `/`
- [ ] Responsive en todos los dispositivos
- [ ] CTAs funcionan correctamente
- [ ] Formulario guarda en Firestore
- [ ] Sin errores en consola
- [ ] Performance optimizada
- [ ] SEO implementado
- [ ] Accesibilidad verificada

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Soporte

Para soporte técnico o preguntas:
- Email: soporte@edunova.com
- Documentación: docs.edunova.com
- Issues: GitHub Issues

---

**EduNova** - Donde juntamos la Educación con lo nuevo.
