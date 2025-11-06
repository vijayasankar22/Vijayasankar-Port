import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Fix for crypto.getRandomValues not available in some Node envs
if (typeof globalThis.crypto === "undefined") {
  const nodeCrypto = await import("node:crypto");
  // Attach webcrypto to globalThis
  (globalThis as any).crypto = nodeCrypto.webcrypto;
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional, default is fine too
  },
});
