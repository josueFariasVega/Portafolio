# Portafolio - Josué Farías

Portafolio personal desarrollado con React, TypeScript y Tailwind CSS. Muestra proyectos, habilidades, experiencia y información de contacto.

## 🚀 Configuración para Producción

### Variables de Entorno

1. **Crea un archivo `.env`** en la raíz del proyecto:
```env
# Variables de entorno para desarrollo local
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_SPOONACULAR_API_KEY=your-spoonacular-api-key
VITE_APP_TITLE="Portafolio - Josué Farías"
```

2. **Para producción**, configura estas mismas variables en tu panel de Vercel.

### Despliegue en Vercel

#### Configuración Inicial

1. **Conecta tu repositorio** a Vercel desde [vercel.com](https://vercel.com)
2. **Configura las ramas**:
   - `main` → **Producción** (dominio principal)
   - `develop` → **Preview** (desarrollo)

#### Configuración de Build

El proyecto incluye `vercel.json` con la configuración automática:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "vite"
}
```

#### Comandos de Deployment

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Arquitectura

### Ramas de Git
- **`main`**: Código de producción estable
- **`develop`**: Desarrollo y nuevas funcionalidades

### Estructura del Proyecto
```
src/
├── app/           # Páginas principales
├── components/    # Componentes reutilizables
├── sections/      # Secciones de la página
├── lib/          # Utilidades y configuraciones
├── styles/       # Estilos globales
└── types/        # Definiciones TypeScript
```

## 📦 Tecnologías

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones
- **Radix UI** - Componentes accesibles

## 🔧 Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 🌐 Dominios

- **Producción**: Configurado automáticamente por Vercel
- **Preview**: Cada PR en `develop` genera un deploy automático

## 📝 Notas

- El proyecto está optimizado para SEO con metadatos apropiados
- Incluye configuraciones de seguridad básicas
- Listo para integración con CMS o APIs externas