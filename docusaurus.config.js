import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WMSDOCS',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',

      replaceSearchResultPathname: {
        from: '/docs/internal', // or as RegExp: /\/docs\//
        to: '/',
      },

    }
    }),
};

export default config;
