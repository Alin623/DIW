import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: "docs",
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        mascotas: fileURLToPath(new URL("./mascotas.html", import.meta.url)),
        formulario: fileURLToPath(new URL("./formulario.html", import.meta.url)),
      },
    },
  },
});
