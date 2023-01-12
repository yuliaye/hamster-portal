<!-- vscode-markdown-toc -->
* 1. [Required](#Required)
* 2. [Setup](#Setup)
* 3. [Development Server](#DevelopmentServer)
* 4. [Production](#Production)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc --># hamster-portal

hamster 官网

##  1. <a name='Required'></a>Required

- Node.js >= v16
- Nuxt >= 3

##  2. <a name='Setup'></a>Setup

Make sure to install the dependencies:

```bash
# Use yarn, you can install yarn if you don't have:
# npm install -g yarn
yarn install
```

##  3. <a name='DevelopmentServer'></a>Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

##  4. <a name='Production'></a>Production

Set Env variables:

```
# .env
NUXT_API_PROXY_TARGET=YOUR_PROXY_URL # Example: NUXT_API_PROXY_TARGET=http://example.com
```

Build the application for production:

```bash
yarn build
```

**Locally preview** production build:

```bash
yarn preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
