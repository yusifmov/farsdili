// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FARS DİLİ DƏRSLƏRİ',
  tagline: 'Fars dili həvəskarları üçün',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://farsdili.az',
  baseUrl: '/',

  organizationName: 'yusifmov',
  projectName: 'farsdili',

  onBrokenLinks: 'throw',

  // Content was migrated from a WordPress site (Gutenberg HTML). Rendering
  // `.md` files as CommonMark lets the raw HTML tables pass through untouched.
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'az',
    locales: ['az'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'dersler',
          editUrl: 'https://github.com/yusifmov/farsdili/tree/main/',
          showLastUpdateTime: false,
        },
        blog: {
          routeBasePath: 'meqaleler',
          blogTitle: 'Məqalələr',
          blogDescription: 'Fars dili və mədəniyyəti haqqında araşdırma yazıları',
          blogSidebarTitle: 'Bütün məqalələr',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'FARS DİLİ DƏRSLƏRİ — Məqalələr',
            copyright: `Copyright © ${new Date().getFullYear()} farsdili.az`,
          },
          editUrl: 'https://github.com/yusifmov/farsdili/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'fars dili, farsca, fars dili dərsləri, fars əlifbası, farsca öyrən'},
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Fars dili',
        logo: {
          alt: 'Fars dili dərsləri',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'dersSidebar',
            position: 'left',
            label: 'Dərslər',
          },
          {to: '/meqaleler', label: 'Məqalələr', position: 'left'},
          {to: '/haqqimizda', label: 'Haqqımızda', position: 'left'},
          {
            href: 'https://github.com/yusifmov/farsdili',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Öyrən',
            items: [
              {label: 'Dərslərin siyahısı', to: '/dersler'},
              {label: 'Fars əlifbası', to: '/dersler/fars-elifbasi-1'},
              {label: 'Məqalələr', to: '/meqaleler'},
            ],
          },
          {
            title: 'Sayt',
            items: [
              {label: 'Haqqımızda', to: '/haqqimizda'},
              {label: 'Məxfilik siyasəti', to: '/privacy-policy'},
            ],
          },
          {
            title: 'Digər',
            items: [
              {label: 'GitHub', href: 'https://github.com/yusifmov/farsdili'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} farsdili.az — Fars dili həvəskarları üçün.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
