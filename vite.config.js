const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                mainjs: resolve(__dirname, './main.js'),
                contacto: resolve(__dirname, './pages/contacto.html'),
                faq: resolve(__dirname, './pages/faq.html'),
                nosotros: resolve(__dirname, './pages/nosotros.html'),
                productos: resolve(__dirname, './pages/productos.html'),
                servicios: resolve(__dirname, './pages/servicios.html'),
                js1: resolve(__dirname, './js/jquery.swatchbook.js'),
                js2: resolve(__dirname, './js/modernizr.custom.79639.js'),
            }
        }
    }
})