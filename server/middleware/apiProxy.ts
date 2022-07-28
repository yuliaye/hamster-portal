import { createProxyMiddleware } from "http-proxy-middleware"

const { apiProxyTarget } = useRuntimeConfig()
const apiProxy = apiProxyTarget && createProxyMiddleware("/api/**", {
  target: apiProxyTarget,
  changeOrigin: true,
  // pathRewrite: path => path.replace(/^\/api/, "")
})

export default defineEventHandler(async ({ req, res }) => {
  if (!apiProxy) {
    return
  }

  await new Promise<void>((resolve, reject) => {
    const next = (err?: unknown) => err ? reject(err) : resolve()
    apiProxy(req, res, next)
  })
})
