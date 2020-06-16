export class Favicons {
  constructor (appName = 'app', path = '') {
    this.icons = {
      android: {
        'android-chrome-36x36.png': 36,
        'android-chrome-48x48.png': 48,
        'android-chrome-72x72.png': 72,
        'android-chrome-96x96.png': 96,
        'android-chrome-144x144.png': 144,
        'android-chrome-192x192.png': 192,
        'android-chrome-256x256.png': 256,
        'android-chrome-384x384.png': 384,
        'android-chrome-512x512.png': 512
      },
      appleIcon: {
        'apple-touch-icon-57x57.png': 57,
        'apple-touch-icon-60x60.png': 60,
        'apple-touch-icon-72x72.png': 72,
        'apple-touch-icon-76x76.png': 76,
        'apple-touch-icon-114x114.png': 114,
        'apple-touch-icon-120x120.png': 120,
        'apple-touch-icon-144x144.png': 144,
        'apple-touch-icon-152x152.png': 152,
        'apple-touch-icon-167x167.png': 167,
        'apple-touch-icon-180x180.png': 180,
        'apple-touch-icon-1024x1024.png': 1024,
        'apple-touch-icon.png': 180,
        'apple-touch-icon-precomposed.png': 180
      },
      coast: {
        'coast-228x228.png': 228
      },
      favicons: {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'favicon-48x48.png': 48,
        'favicon.ico': [16, 24, 32, 48, 64]
      },
      firefox: {
        'firefox_app_60x60.png': 60,
        'firefox_app_128x128.png': 128,
        'firefox_app_512x512.png': 512
      },
      windows: {
        'mstile-70x70.png': 70,
        'mstile-144x144.png': 144,
        'mstile-150x150.png': 150,
        'mstile-310x310.png': 310
      },
      yandex: {
        'yandex-browser-50x50.png': 50
      }
    }

    this.files = {
      android: {
        'manifest.json': {
          name: appName,
          short_name: appName,
          display: 'standalone',
          start_url: '.',
          background_color: '#FFFFFF',
          theme_color: '#FFFFFF',
          icons: [
            {
              src: 'android-chrome-36x36.png',
              sizes: '36x36',
              type: 'image/png'
            },
            {
              src: 'android-chrome-48x48.png',
              sizes: '48x48',
              type: 'image/png'
            },
            {
              src: 'android-chrome-72x72.png',
              sizes: '72x72',
              type: 'image/png'
            },
            {
              src: 'android-chrome-96x96.png',
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: 'android-chrome-144x144.png',
              sizes: '144x144',
              type: 'image/png'
            },
            {
              src: 'android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'android-chrome-256x256.png',
              sizes: '256x256',
              type: 'image\/png'
            },
            {
              src: 'android-chrome-384x384.png',
              sizes: '384x384',
              type: 'image\/png'
            },
            {
              src: 'android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image\/png'
            }
          ]
        }
      },
      firefox: {
        'manifest.webapp': {
          version: '1.0',
          name: appName,
          icons: {
            60: 'firefox_app_60x60.png',
            128: 'firefox_app_128x128.png',
            512: 'firefox_app_512x512.png'
          }
        }
      },
      windows: {
        'browserconfig.xml': [
          {
            name: 'browserconfig',
            children: [
              {
                name: 'msapplication',
                children: [
                  {
                    name: 'tile',
                    children: [
                      { name: 'square70x70logo', attrs: { src: 'mstile-70x70.png' } },
                      { name: 'square150x150logo', attrs: { src: 'mstile-150x150.png' } },
                      { name: 'wide310x150logo', attrs: { src: 'mstile-310x150.png' } },
                      { name: 'square310x310logo', attrs: { src: 'mstile-310x310.png' } },
                      { name: 'TileColor', text: '#FFFFFF' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      yandex: {
        'yandex-browser-manifest.json': {
          version: 1,
          api_version: 1,
          layout: {
            logo: 'yandex-browser-50x50.png',
            color: '#FFFFFF',
            show_title: true
          }
        }
      }
    }

    this.html = {
      android: [
        `<link rel="manifest" href="/${path}/manifest.json" crossOrigin="use-credentials">`,
        '<meta name="theme-color" content="#FFFFFF">',
        `<meta name="application-name" content="${appName}">`
      ],
      appleIcon: [
        `<link rel="apple-touch-icon" sizes="57x57" href="/${path}/apple-touch-icon-57x57.png">`,
        `<link rel="apple-touch-icon" sizes="60x60" href="/${path}/apple-touch-icon-60x60.png">`,
        `<link rel="apple-touch-icon" sizes="72x72" href="/${path}/apple-touch-icon-72x72.png">`,
        `<link rel="apple-touch-icon" sizes="76x76" href="/${path}/apple-touch-icon-76x76.png">`,
        `<link rel="apple-touch-icon" sizes="114x114" href="/${path}/apple-touch-icon-114x114.png">`,
        `<link rel="apple-touch-icon" sizes="120x120" href="/${path}/apple-touch-icon-120x120.png">`,
        `<link rel="apple-touch-icon" sizes="144x144" href="/${path}/apple-touch-icon-144x144.png">`,
        `<link rel="apple-touch-icon" sizes="152x152" href="/${path}/apple-touch-icon-152x152.png">`,
        `<link rel="apple-touch-icon" sizes="167x167" href="/${path}/apple-touch-icon-167x167.png">`,
        `<link rel="apple-touch-icon" sizes="180x180" href="/${path}/apple-touch-icon-180x180.png">`,
        `<link rel="apple-touch-icon" sizes="1024x1024" href="/${path}/apple-touch-icon-1024x1024.png">`,
        '<meta name="apple-mobile-web-app-capable" content="yes">',
        '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">',
        `<meta name="apple-mobile-web-app-title" content="${appName}">`
      ],
      coast: [
        `<link rel="icon" type="image/png" sizes="228x228" href="/${path}/coast-228x228.png">`
      ],
      favicons: [
        `<link rel="shortcut icon" href="/${path}/favicon.ico">`,
        `<link rel="icon" type="image/png" sizes="16x16" href="/${path}/favicon-16x16.png">`,
        `<link rel="icon" type="image/png" sizes="32x32" href="/${path}/favicon-32x32.png">`,
        `<link rel="icon" type="image/png" sizes="48x48" href="/${path}/favicon-48x48.png">`
      ],
      windows: [
        '<meta name="msapplication-TileColor" content="#FFFFFF">',
        `<meta name="msapplication-TileImage" content="/${path}/mstile-144x144.png">`,
        `<meta name="msapplication-config" content="/${path}/browserconfig.xml">`
      ],
      yandex: [
        `<link rel="yandex-tableau-widget" href="/${path}/yandex-browser-manifest.json">`
      ]
    }
  }
}

//   thanks for using faviconit!
// copy the files to your site and add this code inside the HTML <HEAD> tag:
// <!-- ****** faviconit.com favicons ****** -->
// <link rel="shortcut icon" href="/favicon.ico">
// <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico">
// <link rel="icon" type="image/png" sizes="196x196" href="/favicon-192.png">
// <link rel="icon" type="image/png" sizes="160x160" href="/favicon-160.png">
// <link rel="icon" type="image/png" sizes="128x128" href="favicon-128.png" />
// <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png">
// <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
// <link rel="apple-touch-icon" href="/favicon-57.png">
// <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png">
// <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png">
// <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png">
// <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png">
// <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png">
// <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png">
// <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png">
// <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png">
// <meta name="msapplication-config" content="/browserconfig.xml">
// <meta name="msapplication-TileColor" content="#FFFFFF">
// <meta name="msapplication-TileImage" content="/favicon-144.png">

// <meta name="msapplication-square70x70logo" content="favicon-128.png"/>
// <meta name="msapplication-square150x150logo" content="favicon-270.png"/>
// <meta name="msapplication-TileImage" content="favicon-270.png"/>
// <meta name="msapplication-config" content="none"/>
// <!-- ****** faviconit.com favicons ****** --></meta>#
