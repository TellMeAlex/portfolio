# 🧪 Guía de Testing Manual - Accesibilidad (Phase 6)

**Servidor**: http://localhost:3001/
**Fecha**: 2025-10-22
**Sprints Completados**: Sprint 1 + Sprint 2

---

## 📋 Checklist General

### ✅ Sprint 1: WCAG 2.1 AA Foundation
- [ ] No hay H1 duplicados
- [ ] Botones del Hero funcionan correctamente
- [ ] Links de contacto son seguros (rel="noopener noreferrer")
- [ ] Indicadores de foco visibles en todos los elementos interactivos
- [ ] ErrorBoundary funciona correctamente
- [ ] Navegación por teclado Alt+1-6

### ✅ Sprint 2: Advanced Accessibility Panel
- [ ] Botón de accesibilidad visible y funcional
- [ ] Panel se abre con clic y Alt+A
- [ ] Toggle de reducir movimiento funciona
- [ ] Toggle de mostrar atajos funciona
- [ ] Atajos de teclado están documentados
- [ ] Panel se cierra con Esc y clic en backdrop

---

## 🎯 Tests de Navegación por Teclado

### Test 1: Atajos Alt+1-6
1. **Abrir la página**: http://localhost:3001/
2. **Probar cada atajo**:
   - Presiona `Alt + 1` → Debería ir a "Inicio" (scroll al top)
   - Presiona `Alt + 2` → Debería ir a "Sobre Mí"
   - Presiona `Alt + 3` → Debería ir a "Experiencia"
   - Presiona `Alt + 4` → Debería ir a "Proyectos"
   - Presiona `Alt + 5` → Debería ir a "Skills"
   - Presiona `Alt + 6` → Debería ir a "Contacto"

**Verificar**:
- ✅ Scroll suave a cada sección
- ✅ Mensaje en consola: `[Keyboard Nav] Alt+X → Sección`
- ✅ Sin errores en consola

---

### Test 2: Atajo Alt+A (Accesibilidad)
1. **Presiona `Alt + A`**
   - ✅ Panel de accesibilidad se abre desde la derecha
   - ✅ Animación slide-in suave
   - ✅ Focus automático en botón de cerrar (X)
   - ✅ Backdrop con blur visible

2. **Presiona `Alt + A` nuevamente**
   - ✅ Panel se cierra

**Verificar en consola**:
- ✅ Mensaje: `Panel de accesibilidad abierto`

---

### Test 3: Navegación por Tab
1. **Presiona `Tab` repetidamente desde el inicio**
2. **Verificar orden de foco**:
   - Skip Links (invisible hasta foco)
   - Theme Toggle
   - Palette Selector
   - Hero: "Ver Proyectos" button
   - Hero: "Contactar" button
   - Cards navegables (Experience, Projects, Skills, etc.)
   - Links de contacto (email, LinkedIn, GitHub)
   - Botón de Accesibilidad

**Verificar**:
- ✅ Outline cyan de 2px visible en todos los elementos
- ✅ Orden lógico de foco
- ✅ Sin "saltos" inesperados
- ✅ Todos los elementos interactivos son alcanzables

---

## 🎨 Tests del Panel de Accesibilidad

### Test 4: Apertura del Panel
**Método 1: Clic en botón**
1. Hacer clic en el botón flotante "♿ Accesibilidad" (esquina inferior derecha)
   - ✅ Panel se abre
   - ✅ Focus en botón de cerrar

**Método 2: Atajo de teclado**
1. Presionar `Alt + A`
   - ✅ Panel se abre
   - ✅ Focus en botón de cerrar

**Verificar visualmente**:
- ✅ Panel slide-in desde derecha
- ✅ Backdrop oscuro con blur
- ✅ Panel ocupa 400px en desktop
- ✅ Panel ocupa 100% en móvil (<768px)

---

### Test 5: Toggle "Reducir Movimiento"
1. **Abrir panel de accesibilidad**
2. **Hacer clic en toggle "Reducir movimiento"**
   - ✅ Toggle cambia a estado "activado" (verde)
   - ✅ Slider se mueve a la derecha

3. **Cerrar el panel y volver a abrirlo**
   - ✅ Configuración se mantiene (localStorage)

4. **Navegar por la página**
   - ✅ Animaciones reducidas/eliminadas
   - ✅ Hover en cards no tiene animación

5. **Desactivar el toggle**
   - ✅ Animaciones vuelven a la normalidad

**Verificar en DevTools**:
- Inspeccionar `<html>` tag
- ✅ Cuando activado: clase `.reduce-motion` presente
- ✅ Cuando desactivado: clase `.reduce-motion` ausente

---

### Test 6: Toggle "Mostrar Atajos de Teclado"
1. **Abrir panel de accesibilidad**
2. **Verificar estado inicial**
   - ✅ Debería estar activado por defecto

3. **Desactivar el toggle**
   - ✅ Toggle cambia a estado "desactivado"

4. **Hacer hover sobre elementos**
   - ✅ Hints de teclado NO se muestran en hover
   - ✅ Hints SÍ se muestran en focus (siempre, para accesibilidad)

5. **Activar el toggle nuevamente**
   - ✅ Hints se muestran en hover

**Verificar en DevTools**:
- Inspeccionar `<html>` tag
- ✅ Cuando activado: clase `.show-keyboard-hints` presente

---

### Test 7: Referencia de Atajos de Teclado
1. **Abrir panel de accesibilidad**
2. **Scroll al final del panel**
3. **Verificar lista de atajos**:
   - ✅ Alt + 1: Inicio
   - ✅ Alt + 2: Sobre Mí
   - ✅ Alt + 3: Experiencia
   - ✅ Alt + 4: Proyectos
   - ✅ Alt + 5: Skills
   - ✅ Alt + 6: Contacto
   - ✅ Alt + A: Accesibilidad

**Verificar visualmente**:
- ✅ Elementos `<kbd>` con estilo de tecla
- ✅ Colores cyan consistentes
- ✅ Texto legible

---

### Test 8: Botón "Restablecer Configuración"
1. **Modificar ambos toggles**:
   - Activar "Reducir movimiento"
   - Desactivar "Mostrar atajos"

2. **Hacer clic en "Restablecer configuración"**
   - ✅ Ambos toggles vuelven a valores por defecto
   - ✅ Clases en `<html>` se actualizan

3. **Cerrar y reabrir el panel**
   - ✅ Configuración restablecida se mantiene

---

### Test 9: Cerrar el Panel
**Método 1: Botón X**
1. Hacer clic en la X (esquina superior derecha)
   - ✅ Panel se cierra con animación

**Método 2: Tecla Esc**
1. Con panel abierto, presionar `Esc`
   - ✅ Panel se cierra

**Método 3: Clic en backdrop**
1. Hacer clic fuera del panel (área oscura)
   - ✅ Panel se cierra

**Método 4: Alt+A**
1. Presionar `Alt + A` con panel abierto
   - ✅ Panel se cierra (toggle)

---

## 🦮 Tests de Lectores de Pantalla

### Test 10: Anuncios de Navegación
**Requiere**: Lector de pantalla (NVDA, JAWS, VoiceOver)

1. **Activar lector de pantalla**
2. **Presionar `Alt + 3`** (Experiencia)
   - ✅ Debe anunciar: "Navegando a Experiencia"

3. **Presionar `Alt + 6`** (Contacto)
   - ✅ Debe anunciar: "Navegando a Contacto"

**Verificar**:
- ✅ Anuncios claros y oportunos
- ✅ Sin anuncios duplicados

---

### Test 11: Panel de Accesibilidad
1. **Abrir panel con `Alt + A`**
   - ✅ Debe anunciar: "Panel de accesibilidad abierto"

2. **Navegar por el panel con Tab**
   - ✅ Lee "Configuración" heading
   - ✅ Lee cada toggle con su estado (activado/desactivado)
   - ✅ Lee "Atajos de Teclado" heading
   - ✅ Lee cada atajo de la lista

**Verificar roles ARIA**:
- ✅ Panel: `role="dialog"` + `aria-modal="true"`
- ✅ Toggles: `role="switch"` + `aria-checked`
- ✅ Título: `aria-labelledby`

---

## 🎨 Tests de Indicadores de Foco

### Test 12: Focus Visible en Elementos Interactivos
1. **Navegar con Tab por toda la página**
2. **Verificar outline cyan (2px) en**:
   - ✅ Botones (Hero, Contact, etc.)
   - ✅ Links (email, LinkedIn, GitHub)
   - ✅ Cards navegables
   - ✅ Filter buttons (Projects)
   - ✅ Theme Toggle
   - ✅ Palette Selector
   - ✅ Botón de Accesibilidad
   - ✅ Elementos del panel (toggles, botones)

**Verificar**:
- ✅ Outline siempre visible
- ✅ No se superpone con contenido
- ✅ Color cyan consistente

---

## 🔧 Tests Funcionales de Botones

### Test 13: Botones del Hero
1. **Hacer clic en "Ver Proyectos"**
   - ✅ Scroll suave a sección Projects
   - ✅ Focus en card de Projects

2. **Hacer clic en "Contactar"**
   - ✅ Scroll suave a sección Contacto
   - ✅ Focus en card de Contacto

---

### Test 14: Links de Contacto
1. **Inspeccionar links en DevTools**
   - LinkedIn: `href="https://linkedin.com/in/alejandro-de-la-fuente"`
   - GitHub: `href="https://github.com/TellMeAlex"`

2. **Verificar atributos de seguridad**:
   - ✅ `target="_blank"`
   - ✅ `rel="noopener noreferrer"`
   - ✅ `aria-label` descriptivo

3. **Hacer clic en cada link**
   - ✅ Abre en nueva pestaña
   - ✅ No afecta a la página original

---

## 📱 Tests Responsive

### Test 15: Desktop (>768px)
1. **Botón de Accesibilidad**
   - ✅ Muestra icono + texto "Accesibilidad"
   - ✅ Tamaño mínimo 48x48px

2. **Panel de Accesibilidad**
   - ✅ Ancho 400px
   - ✅ Slide-in desde derecha
   - ✅ No ocupa toda la pantalla

---

### Test 16: Mobile (<768px)
1. **Redimensionar ventana a <768px**
2. **Botón de Accesibilidad**
   - ✅ Solo muestra icono ♿
   - ✅ Tamaño 56x56px
   - ✅ Circular

3. **Panel de Accesibilidad**
   - ✅ Ocupa 100% del ancho
   - ✅ Sigue siendo scrolleable
   - ✅ Botón de cerrar accesible

---

## 🚨 Tests de ErrorBoundary

### Test 17: Error Boundary (Opcional)
**Nota**: Requiere forzar un error en la aplicación

1. **Abrir DevTools Console**
2. **Forzar un error** (modificar temporalmente un componente)
3. **Verificar UI de ErrorBoundary**:
   - ✅ Icono ⚠️ pulsante
   - ✅ Título "Algo salió mal"
   - ✅ Mensaje descriptivo
   - ✅ Botones "Reintentar" y "Recargar Página"
   - ✅ Detalles del error (collapsible)

---

## 📊 Tests de Performance (Consola)

### Test 18: Core Web Vitals
1. **Abrir DevTools Console**
2. **Recargar la página**
3. **Esperar 3 segundos**
4. **Verificar mensajes**:
   - ✅ `[Performance] LCP: XXXms - good/needs improvement/poor`
   - ✅ `[Performance] FID: XXXms - good/needs improvement/poor`
   - ✅ `[Performance] CLS: X.XXXX - good/needs improvement/poor`
   - ✅ `[Performance] FCP: XXXms - good/needs improvement/poor`
   - ✅ `[Performance] TTFB: XXXms - good/needs improvement/poor`
   - ✅ Resumen: `📊 Core Web Vitals Summary`

---

## ✅ Checklist Final

### Funcionalidad
- [ ] Todos los atajos de teclado funcionan (Alt+1-6, Alt+A)
- [ ] Botones del Hero navegan correctamente
- [ ] Links de contacto son seguros y funcionales
- [ ] Panel de accesibilidad se abre/cierra correctamente
- [ ] Toggles funcionan y persisten
- [ ] Botón "Restablecer" funciona

### Accesibilidad
- [ ] Focus visible en todos los elementos interactivos
- [ ] Navegación por teclado completa
- [ ] Lectores de pantalla anuncian correctamente
- [ ] No hay H1 duplicados
- [ ] Roles ARIA correctos
- [ ] aria-live regions funcionan

### Visual
- [ ] Animaciones suaves (cuando reducir movimiento está OFF)
- [ ] Animaciones reducidas (cuando reducir movimiento está ON)
- [ ] Indicadores de foco visibles y consistentes
- [ ] Panel responsive (desktop y mobile)
- [ ] Botón de accesibilidad responsive

### Persistencia
- [ ] Configuración se guarda en localStorage
- [ ] Configuración se mantiene al recargar
- [ ] Reset restablece a valores por defecto

---

## 🐛 Problemas Encontrados

### Registrar aquí cualquier bug o issue:

1. **[ISSUE]** Descripción del problema
   - Pasos para reproducir
   - Comportamiento esperado
   - Comportamiento actual

---

## 📝 Notas de Testing

- Navegador usado: _____________
- SO: _____________
- Versión de lector de pantalla (si aplica): _____________
- Fecha de testing: _____________
- Testeado por: _____________

---

## 🎯 Próximos Pasos Después del Testing

1. [ ] Documentar bugs encontrados
2. [ ] Priorizar fixes
3. [ ] Testing con lectores de pantalla reales
4. [ ] Testing cross-browser (Chrome, Firefox, Safari, Edge)
5. [ ] Lighthouse audit (objetivo: 100 accesibilidad)
6. [ ] Crear PR para Phase 6

---

**¡Happy Testing! 🚀**
