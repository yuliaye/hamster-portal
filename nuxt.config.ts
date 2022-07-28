import { defineNuxtConfig } from "nuxt"
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import nodePolyfills from 'rollup-plugin-polyfill-node';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@intlify/nuxt3",
    "floating-vue/nuxt"
  ],
  intlify: {
    localeDir: "locales",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      globalInjection: true
    }
  },
  runtimeConfig: {
    // apiProxyTarget: ""
  },
  vite: {
    build: {
      rollupOptions: {
        plugins: [nodePolyfills()]
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({ buffer: true, process: true }),
          NodeModulesPolyfillPlugin(),
        ],
      },
    }
  },
    apiProxyTarget: "https://cross-chain.authright-test.newtouch.com"
})
