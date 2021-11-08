export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Notaire à Bourges cedex (18), Office notarial de Bruno Bergerault - Jérôme Bergerault -  Pierre-Olivier Dhalluin - Edouard Brungs',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Etude Notariale de Bourges',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Etude Notariale de Bourges',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Notaire à Bourges cedex (18), Office notarial de Bruno Bergerault - Jérôme Bergerault -  Pierre-Olivier Dhalluin - Edouard Brungs',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://notacoeur-bourges.notaires.fr/logo_reseaux.webp',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Logo Notacoeur Bourges',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Etude notariale de Bourges',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Notaire à Bourges cedex (18), Office notarial de Bruno Bergerault - Jérôme Bergerault -  Pierre-Olivier Dhalluin - Edouard Brungs',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://notacoeur-bourges.notaires.fr/logo_reseaux.webp',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://notacoeur-bourges.notaires.fr/logo_reseaux.webp',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Logo Notacoeur Bourges',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://notacoeur-bourges.notaires.fr' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./style/colors.css', './style/fonts.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue-slider-component.js',
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    hostname: 'https://notacoeur-bourges.notaires.fr',
    lastmod: new Date(),
    routes: [
      {
        url: '/',
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date(),
      },
      {
        url: '/annonces-immobilieres',
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/nos-competences',
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date(),
      },
      {
        url: '/notre-equipe',
        changefreq: 'yearly',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/actualites',
        changefreq: 'yearly',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/mentions-legales',
        changefreq: 'yearly',
        priority: 0,
        lastmod: '2021-02-16T22:08:54+00:00',
      },
      {
        url: '/notre-etude',
        changefreq: 'yearly',
        priority: 0.5,
        lastmod: new Date(),
      },
      {
        url: '/politique-de-confidentialite',
        changefreq: 'yearly',
        priority: 0,
        lastmod: new Date(),
      },
      {
        url: '/tarifs-de-l-etude',
        changefreq: 'yearly',
        priority: 1,
        lastmod: new Date(),
      },
    ],
  },
}
