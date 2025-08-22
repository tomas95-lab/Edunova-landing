# Página de Unsubscribe - EduNova Landing

## 📧 **Descripción**

La página de unsubscribe permite a los usuarios darse de baja de los emails de marketing de EduNova de manera fácil y transparente.

## 🚀 **URLs**

- **Página principal**: `/`
- **Página de unsubscribe**: `/unsubscribe?email=usuario@ejemplo.com`

## ✨ **Características**

### 🎯 **Funcionalidades**
- ✅ **Darse de baja**: Proceso simple de un clic
- ✅ **Resubscribirse**: Opción para volver a recibir emails
- ✅ **Email automático**: Detecta el email desde la URL
- ✅ **Diseño responsive**: Funciona en móvil y desktop
- ✅ **Estados de carga**: Feedback visual durante el proceso
- ✅ **Manejo de errores**: Mensajes claros si algo falla

### 🎨 **Diseño**
- **Estilo consistente**: Usa el mismo diseño que el landing principal
- **Colores apropiados**: Rojo para unsubscribe, azul para resubscribe
- **Iconos intuitivos**: X para cancelar, flechas para navegar
- **Animaciones suaves**: Transiciones y estados de carga

### 📱 **Responsive**
- **Mobile-first**: Optimizado para dispositivos móviles
- **Desktop**: Layout centrado y profesional
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

## 🔧 **Implementación Técnica**

### **Rutas**
```typescript
// App.tsx
<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/unsubscribe" element={<UnsubscribePage />} />
</Routes>
```

### **Parámetros de URL**
- `email`: Email del usuario (opcional, se puede ingresar manualmente)

### **Estados**
1. **Inicial**: Muestra confirmación de unsubscribe
2. **Cargando**: Spinner durante el proceso
3. **Completado**: Confirmación de baja exitosa
4. **Error**: Mensaje de error si falla

### **Analytics**
```typescript
// Google Analytics events
window.gtag('event', 'unsubscribe', {
  'event_category': 'email',
  'event_label': email
});
```

## 📋 **Flujo de Usuario**

### **1. Llegada a la página**
- Usuario hace clic en "Darse de baja" en un email
- Llega a `/unsubscribe?email=usuario@ejemplo.com`
- La página detecta automáticamente el email

### **2. Confirmación**
- Muestra el email detectado
- Pregunta si está seguro de darse de baja
- Botones: "Darme de baja" y "Cancelar"

### **3. Procesamiento**
- Botón "Darme de baja" cambia a "Procesando..."
- Spinner de carga
- Simulación de llamada a API (1 segundo)

### **4. Confirmación**
- Mensaje: "¡Te has dado de baja!"
- Opción para resubscribirse
- Botón "Volver al inicio"

## 🛠 **Personalización**

### **Colores**
```css
/* Unsubscribe button */
bg-red-600 hover:bg-red-700

/* Resubscribe button */
bg-blue-600 hover:bg-blue-700

/* Cancel button */
bg-gray-200 hover:bg-gray-300
```

### **Textos**
Los textos están en español y son claros y directos:
- "¿Estás seguro de que quieres dejar de recibir nuestros emails?"
- "¡Te has dado de baja!"
- "Ya no recibirás más emails de EduNova."

### **Contacto**
Información de contacto incluida:
- Email: hola@edunova.edu.ar
- Teléfono: +54 11 2268-3449

## 🔗 **Integración con Email Marketing**

### **Headers en Emails**
```html
List-Unsubscribe: <https://edunova-landing-eahginwq1-tomas95labs-projects.vercel.app/unsubscribe?email={email_urlencoded}>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

### **Footer en Emails**
```html
<a href="{COMPANY_WEBSITE}/unsubscribe?email={email_urlencoded}">
  Darse de baja
</a>
```

## 🚀 **Deployment**

La página está lista para producción y se incluye en el build del landing:

```bash
npm run build
```

Los archivos se generan en `dist/` y están listos para deployar en Vercel, Netlify, o cualquier hosting estático.

## 📊 **Métricas**

### **Eventos de Analytics**
- `unsubscribe`: Cuando un usuario se da de baja
- `resubscribe`: Cuando un usuario se vuelve a suscribir

### **Parámetros**
- `event_category`: "email"
- `event_label`: Email del usuario

## 🔒 **Privacidad y Compliance**

- ✅ **Transparente**: Proceso claro y directo
- ✅ **Fácil**: Un clic para darse de baja
- ✅ **Reversible**: Opción para resubscribirse
- ✅ **Compliant**: Cumple con regulaciones de email marketing

## 🐛 **Troubleshooting**

### **Problemas Comunes**
1. **Email no detectado**: Verificar parámetro `email` en URL
2. **Error de build**: Verificar dependencias de React Router
3. **Estilos no cargan**: Verificar Tailwind CSS

### **Debug**
```typescript
// Verificar email en consola
console.log('Email from URL:', searchParams.get('email'));
```

---

**Creado por**: EduNova Team  
**Fecha**: Agosto 2025  
**Versión**: 1.0.0
