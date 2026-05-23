import '@testing-library/jest-dom'

// Node ≥22 ships an experimental `localStorage`/`sessionStorage` global that shadows
// jsdom's polyfill with a non-functional object (no getItem/setItem). Replace it
// with an in-memory Storage shim so hooks that touch web storage work in tests.
const createStorageShim = (): Storage => {
  const store = new Map<string, string>()
  return {
    get length() {
      return store.size
    },
    clear: () => store.clear(),
    getItem: (key: string) =>
      store.has(key) ? (store.get(key) as string) : null,
    key: (index: number) => Array.from(store.keys())[index] ?? null,
    removeItem: (key: string) => {
      store.delete(key)
    },
    setItem: (key: string, value: string) => {
      store.set(key, String(value))
    },
  }
}

for (const name of ['localStorage', 'sessionStorage'] as const) {
  const shim = createStorageShim()
  Object.defineProperty(globalThis, name, {
    value: shim,
    configurable: true,
    writable: true,
  })
  Object.defineProperty(window, name, {
    value: shim,
    configurable: true,
    writable: true,
  })
}

// Mock IntersectionObserver
;(
  globalThis as typeof globalThis & { IntersectionObserver?: unknown }
).IntersectionObserver = class IntersectionObserver {
  root = null
  rootMargin = ''
  thresholds = []

  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return []
  }
}

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
})

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
})
