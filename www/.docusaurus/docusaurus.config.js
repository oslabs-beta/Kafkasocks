export default {
  "title": "Kafka Socks",
  "tagline": "npm install kafka-socks",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "https://github.com/oslabs-beta/Kafkasocks",
  "projectName": "Kafkasocks",
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "themeConfig": {
    "navbar": {
      "title": "Kafkasocks",
      "logo": {
        "alt": "Kafkasocks Logo",
        "src": "img/Kafkasocks-mini-logo.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "demo",
          "position": "left",
          "label": "Demo",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "type": "doc",
          "docId": "start",
          "position": "left",
          "label": "Getting Started",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "type": "doc",
          "docId": "team",
          "position": "left",
          "label": "Team",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://github.com/oslabs-beta/Kafkasocks",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "/"
            },
            {
              "label": "Discord",
              "href": "/"
            },
            {
              "label": "Twitter",
              "href": "/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Press",
              "to": "/"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Kafkasocks"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false,
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/jenessachapalamadugu/github/Kafkasocks/www/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/jenessachapalamadugu/github/Kafkasocks/www/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "titleDelimiter": "|",
  "noIndex": false
};