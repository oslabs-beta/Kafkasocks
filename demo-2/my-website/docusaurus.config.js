/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kafka Socks',
  tagline: 'npm install kafka-socks',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'https://github.com/oslabs-beta/Kafkasocks', // Usually your GitHub org/user name.
  projectName: 'Kafkasocks', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Kafkasocks',
      logo: {
        alt: 'Kafkasocks Logo',
        src: 'img/Kafkasocks-mini-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Features',
        },
        {
          type: 'doc',
          docId: 'demo',
          position: 'left',
          label: 'Demo',
        },
        {
          type: 'doc',
          docId: 'start',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: 'team',
          position: 'left',
          label: 'Team',
        },
        {
          href: 'https://github.com/oslabs-beta/Kafkasocks',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Press',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kafkasocks`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
