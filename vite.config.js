const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'main.js'),
        nested: resolve(__dirname, './pages/contacto.html'),
        nested: resolve(__dirname, './pages/faq.html'),
        nested: resolve(__dirname, './pages/nosotros.html'),
        nested: resolve(__dirname, './pages/productos.html'),
        nested: resolve(__dirname, './pages/servicios.html')
      }
    }
  }
})