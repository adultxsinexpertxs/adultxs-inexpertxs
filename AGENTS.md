# AGENTS.md - Guía para GitHub Copilot

## Adultxs Inexpertxs

**Somos una comunidad para personas que están aprendiendo a navegar la vida adulta.**

No pretendemos enseñar desde una postura de experto. Preferimos acompañar desde la experiencia, el humor, la vulnerabilidad y la conversación genuina.

---

## 🎯 Filosofía de Marca

### Promesa Principal
"Aquí hay gente igual de perdida que yo... y eso está bien."

### Valores Fundamentales
- **Honestidad radical**: Hablamos de lo que realmente nos importa, sin filtros corporativos.
- **Comunidad sin jerarquía**: Todos tenemos algo que aprender y algo que enseñar.
- **Vulnerabilidad como fortaleza**: Mostrar nuestros miedos y dudas nos conecta.
- **Humor como herramienta**: Reír de nosotros mismos normaliza las dificultades.
- **Acceso democratizado**: Información útil sin paywall ni tecnicismos innecesarios.

### Pilares de Contenido
1. **Finanzas personales sin tecnicismos** - Entender dinero sin MBA
2. **Relaciones** - Amistad, pareja, familia: la vida real
3. **Desarrollo personal** - Crecer sin presión de Instagram
4. **Salud mental** - Hablar abiertamente de ansiedad, depresión, terapia
5. **Carrera profesional** - Trabajo, cambios, frustración, logros
6. **Experiencias compartidas** - Historias reales de nuestra comunidad
7. **Comunidad** - El corazón del proyecto

---

## 🎨 Diseño

### Principios de Diseño

**Claridad sobre belleza**
- El diseño debe desaparecer. El contenido y la conexión son lo importante.
- No buscamos ser "bonito". Buscamos ser **útil y genuino**.

**Minimalismo amigable**
- Menos elementos visuales, más espacio para respirar.
- El blanco/vacío no es un error, es intención.

**Accesibilidad como standard**
- Contraste adecuado desde el inicio (no es opcional).
- Tipografía legible en todos los tamaños.
- Navegación intuitiva para todos.

**Identidad visual sin pretensión**
- Colores que reflejan modernidad sin ser frío.
- Tipografía que suena conversacional.
- Ningún efecto visual sin propósito.

### Palette de Colores
```
Neutrales principales:
- Blanco: #FFFFFF (fondo)
- Gris oscuro: #1F2937 (texto principal)
- Gris claro: #F3F4F6 (fondos secundarios)

Acentos:
- Azul amigable: #2563EB (acciones primarias)
- Verde esperanzador: #10B981 (validación, éxito)
- Naranja calidez: #F97316 (atención, énfasis)
- Rojo honesto: #EF4444 (errores, límites)

Secundarios (para momentos especiales):
- Violeta curiosidad: #8B5CF6 (exploración, nuevas ideas)
- Rosa vulnerabilidad: #EC4899 (emociones, conexión)
```

**Uso:**
- Azul para botones principales y links
- Verde para confirmaciones y completado
- Naranja para puntos de énfasis
- Rojo solo para errores o límites importantes
- Los colores secundarios en momentos narrativos específicos

### Tipografía
```
Titulares (confianza moderna):
- Fuente: Inter, Sofia Pro, o similar sans-serif moderna
- Peso: 600-700
- Spacing: Normal a loose
- Máx 60 caracteres (titulares grandes)

Cuerpo (conversacional):
- Fuente: Inter, System fonts, o similar
- Peso: 400-500
- Tamaño: 16px mínimo (mobile)
- Line-height: 1.6-1.8
- Máx 65-75 caracteres para párrafos

Énfasis:
- Negrita para conceptos clave
- Cursiva para citas o sarcasmo
- Nunca subrayado (genera confusión con links)
```

---

## 🎭 Tono de Voz & Copywriting

### Cómo Hablamos

**Lo que sentimos cuando leemos:**
- Cercano, como un amigo que entiende
- Honesto, sin dulzura falsa
- Conversacional, como si estuviéramos tomando café
- Moderno, sin sonar robótico
- Inteligente pero accesible, sin ser pretencioso
- Nunca corporativo
- Nunca motivación vacía
- Nunca parecemos un curso

### Ejemplos de Tono

❌ **Evitar:**
- "Optimiza tus finanzas personales mediante estrategias de ahorro agresivo"
- "¡Transforma tu vida en 30 días!"
- "Como expertos, te diremos..."
- "Deberías estar haciendo esto a los 25"
- "Los millennials están arruinando la economía"

✅ **Preferir:**
- "Entendemos que ahorrar es difícil. Aquí van algunos trucos que nos funcionan"
- "A veces la vida no sale como planeamos. Y está bien"
- "Nosotros también estamos aprendiendo esto"
- "¿Te ha pasado que...?"
- "Lo que hemos visto en nuestra comunidad es..."

### Técnicas de Copywriting

**Empieza con curiosidad, no con respuestas**
```
❌ "Aquí te enseñamos cómo ahorrar"
✅ "¿Por qué nos cuesta tanto decir 'no' a una salida con amigos?"
```

**Usa "nosotros" frecuentemente**
- "Hemos estado ahí"
- "Nos ha pasado"
- "Hemos aprendido que..."

**Sé específico sobre emociones**
- En lugar de "Es difícil", di "Es frustrante sentir que todos lo entienden menos tú"
- En lugar de "Tienes opciones", di "Hay un camino, pero no es el único"

**Pregunta retórica para enganche**
```
"¿Alguna vez te has sentido como el único que no sabe qué hacer?"

vs.

"Muchas personas se sienten inseguras"
```

**Rompe párrafos largos**
- Máximo 3 líneas por párrafo en texto principal
- Usa viñetas para listas
- El espacio blanco es tu amigo

---

## 🧱 Componentes

### Principios para Componentes

1. **Funcionalidad clara** - Cada componente debe tener UN propósito
2. **Sin capas innecesarias** - Lo visible es lo que existe
3. **Accesible por defecto** - Semántica HTML correcta, ARIA cuando sea necesario
4. **Responsive thinking** - Funciona perfecto en móvil primero
5. **Reutilizable** - Parametrizable sin ser genérico

### Componentes Core

#### 1. Card
```
Propósito: Contener contenido discreto (artículo, historia, recurso)
Características:
- Padding: 1.5rem (mobile), 2rem (desktop)
- Border: ninguno (shadow sutil en hover)
- Background: blanco o gris claro
- Transición suave en hover
- Responsive: stack vertical en móvil

Variantes:
- default: solo contenido
- featured: con badge/icono destacado
- interactive: con acción/botón evidente
- compact: para listados densos
```

#### 2. Button
```
Propósito: Acciones claras y clicables
Características:
- Padding: 0.75rem 1.5rem mínimo
- Border-radius: 0.5rem (moderno pero humanizado)
- Transición: 200ms ease
- Font-weight: 500
- Cursor: pointer

Variantes:
- primary: fondo azul, texto blanco
- secondary: borde azul, fondo transparente
- success: fondo verde (confirmación)
- neutral: gris claro, para acciones secundarias
- danger: solo para destructivas (rojo)
- disabled: opacity 0.5, cursor not-allowed

Estados:
- :hover - más oscuro/relieve visual
- :active - aún más oscuro
- :focus - anillo de enfoque visible (4px, azul 30% opacity)
```

#### 3. Input
```
Propósito: Capturar información del usuario
Características:
- Padding: 0.75rem 1rem
- Border: 1px gris claro, no rounded (o 0.375rem)
- Font-size: 16px (previene zoom en iOS)
- Label clara (no placeholder como label)
- Feedback visual claro

Variantes:
- text: por defecto
- email: con validación
- number: para números
- date: con selector si es necesario
- textarea: para texto largo

Estados:
- default: gris claro
- focus: borde azul, shadow sutil
- filled: gris más claro
- error: borde rojo, mensaje bajo
- disabled: gris muy claro, cursor not-allowed
```

#### 4. Badge
```
Propósito: Categorizar, etiquetar, indicar estatus
Características:
- Padding: 0.25rem 0.75rem
- Border-radius: 9999px
- Font-size: 0.875rem
- Font-weight: 500

Variantes por tema:
- finances: azul
- relationships: rosa
- personal-growth: violeta
- mental-health: verde
- career: naranja
- stories: gris
- community: multi-color

Estados:
- filled: color sólido, texto blanco
- outlined: borde del color, fondo transparente
```

#### 5. Navigation/Header
```
Propósito: Orientar y permitir movimiento
Características:
- Sticky en scroll (después de scroll)
- Contraste suficiente
- Links con hover visual claro
- Mobile: hamburger menu (no ocultes todo)
- Responsive: horizontal > mobile collapsed

Elementos:
- Logo (vuelve a home)
- Nav primaria (max 5-6 items)
- Search (si hay contenido suficiente)
- CTA secundario (login/signup si aplica)
```

#### 6. Toast/Notification
```
Propósito: Feedback de acciones
Características:
- Position: bottom-right (o configurable)
- Auto-dismiss: 5-6 segundos
- Animación suave entrada/salida
- No interrumpe navegación
- Max-width: 90vw (máx 400px)

Variantes:
- success: verde + checkmark
- error: rojo + X
- info: azul + icono
- warning: naranja + !
```

#### 7. Modal/Dialog
```
Propósito: Captar atención para decisiones importantes
Características:
- Overlay semi-transparente (backdrop)
- Centrado en pantalla
- Responsivo (máx 90vw)
- ESC cierra (si es seguro)
- Focus trap (tab circula dentro)
- Accesible (role="dialog")

No lo uses para:
- Avisos simples (usa toast)
- Formularios largos (usa página)
- Confirmaciones triviales
```

#### 8. Story Card
```
Propósito: Presentar historias de comunidad
Características:
- Imagen/Avatar arriba
- Título claro
- Extracto del contenido (2-3 líneas)
- Meta información (autor, fecha)
- Badge de categoría
- Hover: sutilmente más elevado

Propiedades:
- Consistencia visual
- Readable incluso en imagen de fondo
- Click area generosa
```

---

## ♿ Accesibilidad

### No es Opcional

La accesibilidad está integrada en todo. No es un chequeo final.

### Checklist Esencial

**Contraste**
- Texto principal: mínimo 4.5:1 (WCAG AA)
- Texto grande (18px+): 3:1 mínimo
- Iconos sin texto: 3:1 mínimo
- NO confíes solo en color (azul para válido, rojo para error)

**Semántica HTML**
```html
✅ Correcto:
<button aria-label="Cerrar">×</button>
<nav aria-label="Principal">...</nav>
<h1>Título principal</h1>
<h2>Subtítulo</h2> <!-- Nunca saltes niveles -->

❌ Evitar:
<div onclick="...">Click aquí</div>
<span class="button">...</span>
<h1>Título</h1>
<h3>Subtitle (saltaste h2)</h3>
```

**Interactividad**
- Todo que es clickable: accesible por teclado
- Focus visible en todos los elementos interactivos
- Focus order lógico (top-to-bottom, left-to-right)
- Teclista puede navegar sin mouse

**Formularios**
```html
✅ Correcto:
<label for="email">Email</label>
<input id="email" type="email" required>
<span id="error-msg" role="alert">Email inválido</span>

❌ Evitar:
<input placeholder="Email">
<input> <!-- sin label -->
```

**Imágenes**
```html
✅ Correcto:
<img src="historia.jpg" alt="María en el sofá, sonriendo durante una entrevista">

❌ Evitar:
<img src="historia.jpg" alt="imagen">
<img src="decorativo.jpg"> <!-- sin alt, mejor: CSS background-image -->
```

**Color**
- Nunca comuniques información SOLO con color
- Usa también icono, texto, patrón, posición
- Testea con simuladores de daltonismo

**Tipografía**
- Mínimo 16px en mobile
- Line-height mínimo 1.5
- No transformes texto a mayúsculas solo con CSS (usa HTML para screen readers)

---

## 💻 Convenciones de Código

### JavaScript/TypeScript

**Naming**
```javascript
// Componentes: PascalCase
StoryCard.jsx
UserProfile.tsx

// Utilities/Helpers: camelCase
parseDate.js
formatCurrency.js

// Constants: UPPER_SNAKE_CASE
const PILLAR_COLORS = {...}
const API_ENDPOINT = "..."

// Booleans: is/has prefix
isLoading
hasError
canSubmit
```

**Estructura de Componentes**
```javascript
// Orden:
1. Imports
2. Constants/Config
3. Component definition
4. Hooks
5. Event handlers
6. Effects
7. Return (JSX)
8. Export

// Ejemplo:
import { useState } from 'react';
import Card from '@components/Card';

const PILLAR_ICONS = {...};

export function StoryCard({ story }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {...};

  return (
    <Card>...</Card>
  );
}
```

**Props & TypeScript**
```typescript
interface StoryCardProps {
  story: Story;
  onSelect?: (id: string) => void;
  loading?: boolean;
}

export function StoryCard({ 
  story, 
  onSelect, 
  loading = false 
}: StoryCardProps) {
  // ...
}
```

### CSS/Styling

**Metodología: Utility-first (Tailwind) o CSS Modules**
```css
/* Opción 1: Tailwind (preferido para velocidad) */
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Enviar
</button>

/* Opción 2: CSS Modules (para componentes complejos) */
/* Button.module.css */
.primary {
  background: #2563EB;
  color: white;
  padding: 0.75rem 1.5rem;
  /* ... */
}

/* Button.jsx */
import styles from './Button.module.css';
export function Button() {
  return <button className={styles.primary}>Enviar</button>;
}
```

**Variables de Diseño**
```css
:root {
  /* Colores */
  --color-primary: #2563EB;
  --color-success: #10B981;
  --color-danger: #EF4444;
  
  /* Espaciado */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Tipografía */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

**Responsive Design**
```css
/* Mobile-first */
.card {
  padding: var(--spacing-md);
}

/* Tablet y más */
@media (min-width: 768px) {
  .card {
    padding: var(--spacing-lg);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .card {
    padding: var(--spacing-xl);
  }
}
```

### Git & Commits

**Commit Messages**
```
Formato: <tipo>: <descripción>

Tipos:
- feat: nueva característica
- fix: corrección de bug
- docs: cambios en documentación
- style: formato, sin cambio lógico
- refactor: reorganización de código
- test: agregar/actualizar tests
- chore: mantenimiento

Ejemplos:
✅ "feat: agregar pilares de contenido al header"
✅ "fix: contraste de color en botón secundario"
✅ "docs: actualizar AGENTS.md con nuevos componentes"
❌ "Update stuff"
❌ "asdfg"
```

**Branching**
```
Formato: <tipo>/<descripción-corta>

Ejemplos:
- feature/story-card-component
- fix/button-focus-state
- docs/accessibility-guide
- refactor/color-system
```

---

## 🎯 Principios de Diseño

### 1. Simplicidad Radical
No agregues elementos "por si acaso". Si no sabe por qué existe, no existe.

**Pregúntate:**
- ¿Esto ayuda al usuario a lograr su objetivo?
- ¿Puede quitarse sin perder funcionalidad?
- ¿Es realmente necesario en esta etapa?

### 2. Consistencia Deliberada
La consistencia no es aburrimiento, es fiabilidad. Los usuarios confían cuando saben qué esperar.

**Aplica en:**
- Colores para categorías (siempre finanzas = azul)
- Espaciado (múltiplos de 8px o sistema definido)
- Tipografía (max 2 familias de fuentes)
- Patrones de interacción (buttons siempre se comportan igual)

### 3. Claridad Sobre Belleza
Si tenemos que elegir entre "visualmente hermoso" y "claramente entendible", elegimos claridad.

**Ejemplos:**
- Antes de animaciones innecesarias, asegúrate que el usuario entienda qué es cada cosa
- Antes de gradientes bonitos, verifica que el texto es legible
- Antes de efectos, pregunta: ¿esto comunica algo o solo distrae?

### 4. Accesibilidad Como Estándar
No es un feature, es un requisito. Todos ganan: usuarios con capacidades diferentes Y usuarios con estrés, prisa o mal WiFi.

### 5. Iteración Valiente
Lanza cosas. Aprende del uso real. Ajusta. No busques perfección antes de lanzar.

**Pero cuidado:**
- Accesibilidad no itera (es correcta desde día 1)
- Seguridad no itera (es correcta desde día 1)
- El resto puede mejorar

### 6. Comunidad Primero
Cada decisión de diseño debe preguntarse: ¿Esto acerca a la gente o la aleja?

**Ejemplos de decisiones pro-comunidad:**
- Comentarios visibles (sentirse escuchado)
- Perfiles con fotos (humanizar)
- Attribution claro (valorar contribuciones)
- Espacio para vulnerabilidad (no limpiar historias)

---

## ✅ Qué Hacer

### En Diseño
- ✅ Usa espaciado consistente (grid de 8px)
- ✅ Deja mucho espacio blanco
- ✅ Testea legibilidad en móvil
- ✅ Crea jerarquía clara (tamaño, peso, color)
- ✅ Usa iconos para scaneo visual rápido
- ✅ Proporciona feedback visual en interacciones
- ✅ Diseña para el peor caso de conectividad
- ✅ Mantén componentes simples y enfocados

### En Copywriting
- ✅ Empieza con preguntas que el usuario se hace
- ✅ Usa "nosotros" y "nuestro"
- ✅ Cuenta historias, no solo hechos
- ✅ Sé específico: "Sentir que gastas 200 en algo que no recuerdas" vs "Gastas dinero"
- ✅ Usa viñetas para escaneo rápido
- ✅ Incluye números reales cuando sea posible
- ✅ Reconoce que esto es difícil
- ✅ Ofrece esperanza sin ser tóxico

### En Código
- ✅ Usa TypeScript para componentes principales
- ✅ Escribe tests para lógica importante
- ✅ Refactoriza componentes reutilizables
- ✅ Comenta por qué, no qué (el código dice qué)
- ✅ Mantén componentes pequeños (<200 líneas idealmente)
- ✅ Proporciona propiedades documentadas (JSDoc)
- ✅ Valida inputs en componentes
- ✅ Maneja errores gracefully

### En UX
- ✅ Reduce clics para completar acciones
- ✅ Proporciona caminos alternativos
- ✅ Diseña para interrupciones (usuario vuelve después)
- ✅ Haz obvio qué es clickable
- ✅ Muestra progreso en procesos multi-paso
- ✅ Permite deshacer acciones cuando sea posible
- ✅ Carga datos progresivamente
- ✅ Prevén errores, no solo los muestres

---

## ❌ Qué Evitar

### En Diseño
- ❌ Usar color SOLO para comunicar información
- ❌ Animaciones que no comunican nada
- ❌ Fuentes muy pequeñas "se ve bien en mi pantalla"
- ❌ Campos de forma obligatorios sin justificación
- ❌ Hover states solo en desktop
- ❌ Fondos con mucho contraste de texturas
- ❌ Menús anidados profundos
- ❌ Diseñar solo para escritorio y "adaptar" después
- ❌ Bordes redondeados excesivos (parece infantil o corporativo)
- ❌ Sombras sin dirección clara

### En Copywriting
- ❌ "Como expertos, sabemos que..."
- ❌ "Deberías estar haciendo esto a los 25"
- ❌ "¡Transforma tu vida!" (motivación vacía)
- ❌ Párrafos de más de 4 líneas sin break
- ❌ Jerga sin explicación
- ❌ Genérico: "Muchas personas se sienten así"
- ❌ Tono corporativo o de curso
- ❌ Ignorar que esto es difícil
- ❌ Obligaciones o culpa ("deberías", "tienes que")
- ❌ Pretender que hay un camino único correcto

### En Código
- ❌ Componentes multi-propósito (hace demasiadas cosas)
- ❌ Props sin default o documentación
- ❌ Importes circulares
- ❌ Funciones que mezclan lógica y presentación
- ❌ Nombres de variables ambiguos (e, x, tmp)
- ❌ Comentarios obvios: `// incrementar contador`
- ❌ Archivos mayores a 300-400 líneas
- ❌ Ignorar accessibility desde el inicio
- ❌ Hardcodear valores de diseño (usa variables)
- ❌ Tests vacíos o sin assertions

### En UX
- ❌ Obligar registro antes de probar
- ❌ Popups en entrada (mínimo esperemos 30 seg)
- ❌ Eliminar back button
- ❌ Cambiar comportamiento esperado "para ser único"
- ❌ Contenido interactivo que no es obvio
- ❌ Breadcrumbs incorrectos
- ❌ Buscar sin resultados "vacíos" (muestra sugerencias)
- ❌ Formularios que pierden datos al volver
- ❌ Loading states invisibles
- ❌ Enlaces que abren en ventana nueva sin avisar

---

## 🏗️ Cómo Escribir Nuevos Componentes

### Proceso

#### 1. Define el Propósito (antes de código)
```
Responde:
- ¿Qué problema resuelve este componente?
- ¿Cuántas formas diferentes puede verse?
- ¿Quién lo usa?
- ¿En qué contextos aparece?

Ejemplo (PillarBadge):
- Problema: Etiquetar historias por categoría de forma visual clara
- Variantes: 7 (uno por pilar)
- Usuarios: Diseñadores, editores, visitantes
- Contextos: Tarjetas, filtros, headers de historias
```

#### 2. Diseña en Figma (o documenta visualmente)
```
Antes de escribir código:
- Crea todas las variantes
- Documentar states (default, hover, focus, disabled)
- Define padding, colores exactos, tipografía
- Testea contraste
- Verifica en móvil
```

#### 3. Estructura el Componente
```typescript
// 1. Imports en orden
import React, { ReactNode, CSSProperties } from 'react';
import styles from './ComponentName.module.css';

// 2. Tipos (si usas TypeScript)
interface ComponentNameProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

// 3. Constantes
const VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
} as const;

// 4. Componente
export function ComponentName({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  className = '',
  ariaLabel,
}: ComponentNameProps) {
  // 5. Hooks si es necesario
  const [state, setState] = React.useState(false);

  // 6. Event handlers
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  // 7. Render
  return (
    <button
      className={`
        ${styles.component}
        ${styles[variant]}
        ${styles[size]}
        ${disabled ? styles.disabled : ''}
        ${className}
      `}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

// 8. Export nombrado
ComponentName.displayName = 'ComponentName';
```

#### 4. Escribe Estilos
```css
/* ComponentName.module.css */

/* Base styles */
.component {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 200ms ease;
  font-family: inherit;
  
  /* Accesibilidad: focus visible */
  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
}

/* Variantes */
.primary {
  background: var(--color-primary);
  color: white;
  
  &:hover:not(:disabled) {
    background: #1d4ed8;
  }
  
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
}

.secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  
  &:hover:not(:disabled) {
    background: var(--color-primary);
    color: white;
  }
}

/* Tamaños */
.sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Estado disabled */
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### 5. Documentación (JSDoc)
```typescript
/**
 * ComponentName - Descripción breve
 * 
 * Un componente que hace X con el propósito de Y.
 * Sigue la identidad de Adultxs Inexpertxs: cercano, honesto, conversacional.
 * 
 * @param {Object} props
 * @param {'primary' | 'secondary'} [props.variant='primary'] - Estilo visual
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Tamaño del componente
 * @param {boolean} [props.disabled=false] - Desactiva el componente
 * @param {ReactNode} props.children - Contenido dentro
 * @param {() => void} [props.onClick] - Handler de click
 * @param {string} [props.className] - Clases CSS adicionales
 * @param {string} [props.ariaLabel] - Label para screen readers
 * 
 * @example
 * <ComponentName variant="primary" onClick={() => console.log('clicked')}>
 *   Haz click aquí
 * </ComponentName>
 * 
 * @accessibility
 * - Soporta keyboard navigation (Enter/Space)
 * - Visible focus indicator
 * - aria-label para contexto adicional si es necesario
 * - aria-disabled cuando está deshabilitado
 */
```

#### 6. Tests
```typescript
// ComponentName.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('debe renderizar con contenido', () => {
    render(<ComponentName>Texto</ComponentName>);
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('debe responder a clicks cuando no está deshabilitado', () => {
    const handleClick = jest.fn();
    render(<ComponentName onClick={handleClick}>Click</ComponentName>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('no debe responder a clicks cuando está deshabilitado', () => {
    const handleClick = jest.fn();
    render(
      <ComponentName onClick={handleClick} disabled>
        Click
      </ComponentName>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('debe ser accesible con teclado', () => {
    render(<ComponentName>Presiona Enter</ComponentName>);
    const button = screen.getByRole('button');
    
    button.focus();
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(button).toHaveFocus();
  });
});
```

#### 7. Integración en Historia de Storybook (si aplica)
```typescript
// ComponentName.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Botón primario',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Botón secundario',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Deshabilitado',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ComponentName size="sm">Pequeño</ComponentName>
      <ComponentName size="md">Medio</ComponentName>
      <ComponentName size="lg">Grande</ComponentName>
    </div>
  ),
};
```

#### 8. Checklist Antes de Mergear
```
□ Propósito es claro en documentación
□ Componente es pequeño y enfocado
□ Todos los props están documentados
□ TypeScript types están presentes
□ Estados (hover, focus, disabled, active) están estilizados
□ Contrastea correctamente (4.5:1 mínimo)
□ Funciona en móvil sin cambios forzados
□ Focus order es lógico
□ ARIA labels si es necesario
□ Tests básicos presentes
□ CSS no tiene valores hardcodeados (usa variables)
□ Componente sigue naming conventions
□ Imports están ordenados
□ No hay console.logs o debug code
□ README o docstring actualizado
```

---

## 🚀 Guía Rápida para Colaboradores

### Si estás...

**...creando una nueva página**
1. Define el propósito de la página en una oración
2. Esboza en Figma o con wireframe simple
3. Identifica qué componentes existentes usar
4. Crea solo 1-2 componentes nuevos si es necesario
5. Escribe el contenido pensando en accesibilidad desde el inicio

**...escribiendo contenido/copy**
1. Empieza con una pregunta
2. Cuenta historias, no solo hechos
3. Usa "nosotros"
4. Rompe párrafos largos
5. Revisa que no suene a "curso" o "experto"
6. ¿Diría un amigo esto mientras toman café?

**...arreglando un bug visual**
1. Verifica que sea visible en móvil también
2. Testea con zoom al 200%
3. Verifica contraste
4. Asegura que focus visible funciona

**...agregando interactividad**
1. ¿Es necesario? (no agregues por agregar)
2. ¿Funciona sin JavaScript?
3. ¿El usuario entiende qué pasó?
4. ¿Proporciona feedback visual?

---

## 📚 Referencias Internas

- **Colores:** Definidos en `:root` CSS
- **Tipografía:** Inter primaria, fallbacks a system fonts
- **Espaciado:** Grid de 8px base
- **Breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

---

## 🤝 Espíritu del Proyecto

Cada línea de código, cada color, cada palabra existe para comunicar UNA cosa:

> "Aquí hay gente igual de perdida que yo... y eso está bien."

Si tu contribución ayuda alguien a sentir eso, bienvenido.

Si no está claro cómo una decisión comunica eso, cuestionalo.

---

**Última actualización:** Junio 2026
**Contribuidores:** Comunidad de Adultxs Inexpertxs
