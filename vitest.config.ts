import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 20000,
    coverage: {
      reporter: ['text', 'json', 'html', 'clover'],
    },
  },
});
