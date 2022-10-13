// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
      // ... other options
      modules: [
        // ...
        [
          '@pinia/nuxt',
          {
            autoImports: [
              // automatically imports `defineStore`
              'defineStore', // import { defineStore } from 'pinia'
              // automatically imports `defineStore` as `definePiniaStore`
              ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            ],
          },
        ],
      ],

      app: {
          head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'My App',
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { hid: 'description', name: 'description', content: '' },
              { name: 'format-detection', content: 'telephone=no' }
            ]
          }
        },

      css: [
        
        // CSS file in the project
        'bootstrap/dist/css/bootstrap.min.css',
        'bootstrap-icons/font/bootstrap-icons.css'
      ],

      publicRuntimeConfig: {
        API_BASE_URL: process.env.API_BASE_URL
      },

})
