/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
const path = require('path');

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  // We need to keep the docs folder in the same folder
  // as the package.json file for now
  customDocsPath: path.basename(__dirname) + '/article',

  docsUrl: 'article',

  title: 'Spacenditure', // Title for your website.
  tagline: "Let's explore space",
  url: 'https://spacenditure.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'spacenditure',
  organizationName: 'spacenditure',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { search: true },
    { doc: 'article1', label: 'Article' },
    // { doc: 'doc4', label: 'API' },
    { blog: true, label: 'Blog' },
    { page: 'help', label: 'Help' },
    // { page: 'about', label: 'About' }
  ],

  editUrl: 'https://github.com/navneetlal/spacenditure/edit/master/article/',

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    // primaryColor: '#6200EE', // Material UI
    // secondaryColor: '#03DAC6' // Material UI

    // primaryColor: '#03453a',
    // secondaryColor: '#023028',

    primaryColor: '#233269',
    secondaryColor: '#6395EC' 
  },

  /* Custom fonts for website */
  
  // fonts: {
  //   myFont: [
  //     "Roboto",
  //     "Times New Roman",
  //     "Serif"
  //   ],
  //   myOtherFont: [
  //     "-apple-system",
  //     "system-ui"
  //   ]
  // },
  

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Spacenditure`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'googlecode',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],


  // stylesheets: ['styles.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  algolia: {
    apiKey: 'b8ea6a3cc10bfe23536ae8ebe45e9262',
    indexName: 'dev_spacenditure',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // Expand/collapse the links and subcategories in the sidebar.
  // docsSideNavCollapsible: true,

  // Google Analytics tracking ID to track page views.
  gaTrackingId: "UA-133298629-1",

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/navneetlal/spacenditure',
};

module.exports = siteConfig;
