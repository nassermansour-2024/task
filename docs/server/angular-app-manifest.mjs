
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/task/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/task/home",
    "route": "/task"
  },
  {
    "renderMode": 0,
    "route": "/task/home"
  },
  {
    "renderMode": 0,
    "route": "/task/products"
  },
  {
    "renderMode": 0,
    "route": "/task/product/*"
  },
  {
    "renderMode": 0,
    "route": "/task/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5164, hash: '45d03a38b9ef759e6670cd0ec3e352b6b0e8c7734aabd300db306298cf826aa5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1078, hash: '9c0cc71dff95cc089202ebb7a5e6fdacebcb5a6f00b91520bc701c9cf29386de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RXK3TGKQ.css': {size: 23876, hash: '0xVWW/ZWAWs', text: () => import('./assets-chunks/styles-RXK3TGKQ_css.mjs').then(m => m.default)}
  },
};
