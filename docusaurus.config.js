import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WMSDOCS',
  favicon: 'img/favicon.ico',
  url: 'https://wmsdocs.netlify.app',
  baseUrl: '/',
  organizationName: 'G-global', 
  projectName: 'wms', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es','en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', 
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

   plugins: ["./src/plugins/tailwind-config.js"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
       sitemap: {
        lastmod: 'date',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
        createSitemapItems: async (params) => {
          const {defaultCreateSitemapItems, ...rest} = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes('/page/'));
        },
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'G-WMS DOCS',
        logo: {
          alt: 'G-WNS DOCS',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual de Usuario',
          },
               {
          type: 'localeDropdown',
          position: 'left',
        },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Manual de usuario',
                to: '/docs/intro',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} G-WMS DOCS, G-Global Inc. Hecho con Amor 💙.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia:{
      appId: 'J0LTVUIX2S',
      apiKey: 'd9d2f7791156cdb0ce7c16c5bc3ba11d',
      indexName: 'wmsnetlify',
      contextualSearch: false,
      searchParameters:{},
      

    }
    }),
};

export default config;
