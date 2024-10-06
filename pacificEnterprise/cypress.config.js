import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1536,
    viewportHeight: 2048,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
