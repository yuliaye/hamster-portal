import { defineNuxtConfig } from "nuxt"
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { configStyleImportPlugin } from './vite/plugins/styleImport';
import path from "path"

const pathResolve = (dir: string) => path.resolve(process.cwd(), '.', dir);


const { getImageURL } = useAssets()
const { t } = useI18n()

// For metas
const { host } = useRequestHeaders()
const websiteBaseUrl = host ? (host.startsWith("localhost") ? "http://" : "https://") + host : ""
const metaImage = websiteBaseUrl + getImageURL('search-show.jpg')


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1', 
      meta: [
        { name: 'description', itemprop: 'description', content: t('meta.introduced') },
        { itemprop: 'image', content: metaImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@hamsternetio' },
        { name: 'twitter:creator', content: '@hamsternetio' },
        { name: 'twitter:image', content: metaImage },
        { name: 'twitter:image:alt', content: t('meta.introduced') },
        { property: 'og:description', content: t('meta.introduced') },
        { property: 'og:url', content: 'https://hamsternet.io/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: metaImage },
        { property: 'og:image:alt', content: t('meta.introduced') },
        { property: 'og:locale', content: 'en' },
        { property: 'og:site_name', content: 'Hamster' },
        { property: 'og:title', content: 'Hamster' },
      ],
    }
  },
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@intlify/nuxt3",
    "floating-vue/nuxt",
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
    dashboardsProxyTarget: "http://183.66.65.207:8003",
    public: {
      hamsterClientPackage: {
        version: 'v1.3.3',
        windowsLink: 'https://github.com/hamster-shared/hamster-client/releases/download/v1.3.2/hamster-client-v1.3.2-windows-amd64.zip',
        macLink: 'https://github.com/hamster-shared/hamster-client/releases/download/v1.3.3/hamster-client-v1.3.3-darwin-amd64.dmg',
        linuxLink: 'https://github.com/hamster-shared/hamster-client/releases/download/v1.3.0/hamster-client-v1.3.0-linux-amd64.tar.gz'
      },
      hamsterProviderPackage: {
        version: 'v1.3.3',
        windowsLink: 'https://github.com/hamster-shared/hamster-provider/releases/download/v1.3.2/hamster-provider-v1.3.2-windows-amd64.zip',
        macLink: 'https://github.com/hamster-shared/hamster-provider/releases/download/v1.3.3/hamster-provider-v1.3.3-darwin-amd64.dmg',
        linuxLink: 'https://github.com/hamster-shared/hamster-provider/releases/download/v1.3.3/hamster-provider-v1.3.3-linux-amd64.tar.gz'
      }
    }
  },
  vite: {
    resolve: {
      alias: {
        "web3": pathResolve("node_modules/web3/dist/web3.min.js"),
      }
    },
    plugins: [
      configStyleImportPlugin(),
    ],
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
        ["ant-design-vue", "@ant-design/icons-vue",'@antv/g2','swiper','vue-awesome-swiper','vue3-carousel-3d'],
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
