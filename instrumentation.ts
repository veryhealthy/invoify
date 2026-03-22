export async function register() {
  // Node.js 25+ exposes a global `localStorage` object, but without
  // `--localstorage-file` its methods (getItem, setItem, …) are undefined.
  // Next.js dev-tools and some libraries call localStorage during SSR,
  // which crashes with "localStorage.getItem is not a function".
  // Patch the broken global with a simple no-op implementation.
  if (
    typeof localStorage !== "undefined" &&
    typeof localStorage.getItem !== "function"
  ) {
    const store = new Map<string, string>();
    Object.defineProperty(globalThis, "localStorage", {
      value: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => store.set(key, String(value)),
        removeItem: (key: string) => store.delete(key),
        clear: () => store.clear(),
        get length() {
          return store.size;
        },
        key: (index: number) => Array.from(store.keys())[index] ?? null,
      },
      configurable: true,
      writable: true,
    });
  }
}
