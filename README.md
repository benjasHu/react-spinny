# React Spinny

A beautiful, customizable React spinner component with TypeScript support. Features multiple variants, smooth animations, and easy styling.

## Installation
Install with [pnpm](https://pnpm.io/) or your preferred package manager:

```bash
pnpm add react-spinny
```

## Quick Start

```tsx
import { Spinner } from 'react-spinny'

function App() {
  return (
    <Spinner
      variant="default"
      foreground="#3b82f6"
    />
  )
}
```

## Component API

### Spinner

```tsx
import { Spinner } from 'react-spinny'

<Spinner
  variant="default"
  foreground="#3b82f6"
  background="#e5e7eb"
  size={40}
  strokeWidth={4}
  duration={1000}
/>
```

## Props

| Prop           | Type                                  | Default       | Description                                 |
| -------------- | ------------------------------------- | ------------- | ------------------------------------------- |
| `variant`      | `'default' \| 'rounded' \| 'quarter'` | `'default'`   | Visual style of the spinner                   |
| `foreground`   | `string`                              | **Required** | Foreground color                 |
| `background`   | `string`                              | `undefined`   | Background color (used in 'quarter' variant) |
| `size`         | `number`                    | `40`          | Size of the spinner in pixels               |
| `strokeWidth`  | `number`                              | `6`           | Stroke thickness                            |
| `duration`     | `number`                              | `800`         | Animation duration in milliseconds    |
| `...restProps` | `HTMLAttributes<HTMLDivElement>`      | -             | Any valid div prop                |

## Hook API

### useSpinner

```tsx
import { useSpinner } from 'react-spinny'

function CustomSpinner() {
  const { style } = useSpinner({
    variant: 'default',
    foreground: '#3b82f6',
    background: '#e5e7eb',
    size: 40,
    strokeWidth: 4,
    duration: 1000
  })

  return <div style={style} />
}
```

## Variants

### Default

```tsx
<Spinner
  variant="default"
  foreground="#3b82f6"
/>
```

### Rounded

```tsx
<Spinner
  variant="rounded"
  foreground="#10b981"
/>
```

### Quarter

```tsx
<Spinner
  variant="quarter"
  foreground="#f59e0b"
/>
```

## Styling

The component accepts standard HTML div attributes and can be styled with CSS:

```tsx
<Spinner
  variant="default"
  foreground="#3b82f6"
  className="my-custom-spinner"
  style={{ margin: '20px auto' }}
/>
```

```css
.my-custom-spinner {
  opacity: 0.8;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}
```

## TypeScript

Full TypeScript support with comprehensive type definitions:

```tsx
import { Spinner, SpinnerProps, useSpinner } from 'react-spinny'

const props: SpinnerProps = {
  variant: 'default',
  foreground: '#3b82f6',
  size: 48
}

function TypedSpinner(props: SpinnerProps) {
  return <Spinner {...props} />
}
```

## Examples

### Loading Button

```tsx
import { Spinner } from 'react-spinny'

function LoadingButton({ isLoading, children }) {
  return (
    <button disabled={isLoading}>
      {isLoading ? (
        <Spinner
          variant="default"
          foreground="#ffffff"
          size={16}
        />
      ) : (
        children
      )}
    </button>
  )
}
```

### Page Loading

```tsx
import { Spinner } from 'react-spinny'

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner
        variant="rounded"
        foreground="#3b82f6"
        size={48}
        duration={800}
      />
    </div>
  )
}
```

### Custom Colors

```tsx
import { Spinner } from 'react-spinny'

function ColorfulSpinners() {
  return (
    <div className="flex gap-4">
      <Spinner
        variant="default"
        foreground="#ef4444"
      />
      <Spinner
        variant="rounded"
        foreground="#10b981"
      />
      <Spinner
        variant="quarter"
        foreground="#f59e0b"
      />
    </div>
  )
}
```

## Requirements

- React 16.8+
- TypeScript 4.5+ (for TypeScript projects)

## License

MIT © [Benja Osuna](https://github.com/benjasHu)
