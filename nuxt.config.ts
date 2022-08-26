import { defineNuxtConfig } from "nuxt"
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { configStyleImportPlugin } from './vite/plugins/styleImport';
import path from "path"

const pathResolve = (dir: string) => path.resolve(process.cwd(), '.', dir);

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
    apiProxyTarget: "https://cross-chain.authright-test.newtouch.com",
    public: {
      hamsterClientPackage: {
        version: 'v1.3.0',
        windowsLink: 'https://github.com/hamster-shared/hamster-client/releases/download/v1.3.0/hamster-client-v1.3.0-windows-amd64.zip',
        macLink: 'https://github.com/hamster-shared/hamster-client/releases/download/v1.3.0/hamster-client-v1.3.0-darwin-amd64.tar.gz',
        linuxLink: 'https://github.com/hamster-shared/hamster-client/releases/download/v1.3.0/hamster-client-v1.3.0-linux-amd64.tar.gz'
      },
      hamsterProviderPackage: {
        version: 'v1.3.0',
        windowsLink: 'https://github.com/hamster-shared/hamster-provider/releases/download/v1.3.0/hamster-provider-v1.3.0.windows-amd64.tar',
        macLink: 'https://github.com/hamster-shared/hamster-provider/releases/download/v1.3.0/hamster-provider-v1.3.0-darwin-amd64.tar.gz',
        linuxLink: 'https://github.com/hamster-shared/hamster-provider/releases/download/v1.3.0/hamster-provider-v1.3.0-linux-amd64.tar.gz'
      }
    }
  },
  vite: {
    resolve: {
      alias: {
        "web3": pathResolve("node_modules/web3/dist/web3.min.js"),
      }
    },
    plugins: [configStyleImportPlugin()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    build: {
      rollupOptions: {
        plugins: [nodePolyfills()]
      },
      transpile: [
        ["ant-design-vue", "@ant-design/icons-vue"],
      ],
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
    },
  },
})
