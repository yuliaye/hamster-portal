# hamster-portal

hamster 官网

## Required

- Node.js >= v16
- Nuxt >= 3

## Setup

Make sure to install the dependencies:

```bash
# Use yarn, you can install yarn if you don't have:
# npm install -g yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

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
