# Spinner Component

Un componente de spinner altamente personalizable para React construido con TypeScript. Ofrece múltiples variantes visuales y animaciones CSS puras sin dependencias externas.

## Características

- 🎨 **3 variantes visuales**: Default, Rounded y Quarter
- 🎯 **Totalmente personalizable**: Colores, tamaño, grosor y duración
- 📦 **Sin dependencias**: Solo CSS y React
- 🔧 **TypeScript nativo**: Tipado completo incluido
- ⚡ **Optimizado**: Reutiliza estilos CSS automáticamente
- 🎪 **Ref forwarding**: Compatible con React 19

## Instalación

Copia los siguientes archivos a tu proyecto:

```
components/
├── Spinner/
│   ├── index.ts
│   ├── Spinner.tsx
│   ├── hooks.ts
│   └── types.ts
```

## Uso básico

```tsx
import { Spinner } from './components/Spinner'

function App() {
  return (
    <Spinner
      variant="default"
      foreground="#3b82f6"
      background="#e5e7eb"
      size={40}
    />
  )
}
```

## Props

| Prop           | Tipo                                  | Default       | Descripción                                 |
| -------------- | ------------------------------------- | ------------- | ------------------------------------------- |
| `variant`      | `'default' \| 'rounded' \| 'quarter'` | `'default'`   | Estilo visual del spinner                   |
| `foreground`   | `string`                              | **Requerido** | Color principal del spinner                 |
| `background`   | `string`                              | `undefined`   | Color de fondo (usado en variant 'quarter') |
| `size`         | `string \| number`                    | `40`          | Tamaño del spinner en píxeles               |
| `strokeWidth`  | `number`                              | `6`           | Grosor del trazo                            |
| `duration`     | `number`                              | `800`         | Duración de la animación en milisegundos    |
| `...restProps` | `HTMLAttributes<HTMLDivElement>`      | -             | Cualquier prop válida de div                |

## Variantes

### Default

Spinner con gradiente cónico y máscara CSS.

```tsx
<Spinner
  variant="default"
  foreground="#3b82f6"
  size={40}
  strokeWidth={4}
/>
```

### Rounded

Spinner con puntos redondeados en los extremos.

```tsx
<Spinner
  variant="rounded"
  foreground="#ef4444"
  size={50}
  strokeWidth={6}
/>
```

### Quarter

Spinner tipo border con un cuarto coloreado.

```tsx
<Spinner
  variant="quarter"
  foreground="#10b981"
  background="#e5e7eb"
  size={30}
  strokeWidth={3}
/>
```

## Uso con Ref

El componente soporta ref forwarding para acceso directo al elemento DOM:

```tsx
import { useRef, useEffect } from 'react'
import { Spinner } from './components/Spinner'

function App() {
  const spinnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (spinnerRef.current) {
      console.log('Spinner dimensions:', {
        width: spinnerRef.current.offsetWidth,
        height: spinnerRef.current.offsetHeight
      })
    }
  }, [])

  return (
    <Spinner
      ref={spinnerRef}
      variant="default"
      foreground="#8b5cf6"
      size={60}
    />
  )
}
```

## Ejemplos avanzados

### Spinner con eventos

```tsx
<Spinner
  variant="rounded"
  foreground="#f59e0b"
  size={45}
  onClick={() => console.log('Spinner clicked!')}
  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
/>
```

### Spinner responsivo

```tsx
<Spinner
  variant="default"
  foreground="currentColor"
  size="clamp(20px, 5vw, 60px)"
  className="text-blue-500"
/>
```

### Múltiples spinners con diferentes velocidades

```tsx
<div className="flex gap-4">
  <Spinner
    variant="default"
    foreground="#ef4444"
    duration={600}
  />
  <Spinner
    variant="rounded"
    foreground="#3b82f6"
    duration={800}
  />
  <Spinner
    variant="quarter"
    foreground="#10b981"
    duration={1000}
  />
</div>
```

## Arquitectura interna

### Componente Spinner (`Spinner.tsx`)

El componente principal que recibe las props y renderiza el div con los estilos aplicados. Utiliza `forwardRef` para permitir el acceso a la referencia del DOM.

### Hook useSpinner (`hooks.ts`)

Hook personalizado que:

- Calcula los estilos CSS según la variante y props
- Inyecta las animaciones CSS keyframes en el documento
- Optimiza la creación de estilos para evitar duplicados
- Retorna el objeto de estilos listo para aplicar

### Tipos (`types.ts`)

Definiciones de TypeScript que incluyen:

- `SpinnerProps`: Interface principal del componente
- Extiende `HTMLAttributes<HTMLDivElement>` para compatibilidad total

## Optimizaciones

### Gestión de estilos CSS

Los keyframes CSS se inyectan una sola vez en el documento, sin importar cuántas instancias del componente haya:

```tsx
// Evita duplicación de estilos
if (!document.getElementById(styleId)) {
  // Solo crea el estilo si no existe
}
```

### Memoización

Los estilos se memorizan usando `useMemo` para evitar recálculos innecesarios:

```tsx
const style = useMemo(() => {
  // Cálculo de estilos...
}, [variant, foreground, background, duration, size, strokeWidth])
```

## Compatibilidad

- ✅ React 17+
- ✅ React 18
- ✅ React 19
- ✅ TypeScript 4.0+
- ✅ Todos los navegadores modernos
- ✅ SSR compatible (Next.js, Remix, etc.)

## Personalización CSS

Para personalizaciones avanzadas, puedes sobrescribir los estilos usando CSS:

```css
.custom-spinner {
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
  border-radius: 12px !important;
}
```

```tsx
<Spinner
  variant="default"
  foreground="#3b82f6"
  className="custom-spinner"
/>
```

## Rendimiento

- 🚀 **Ligero**: ~2KB minificado
- ⚡ **Rápido**: Animaciones CSS puras
- 🎯 **Eficiente**: Sin re-renders innecesarios
- 💾 **Optimizado**: Reutilización automática de estilos

## Licencia

MIT License - Libre para uso comercial y personal.
