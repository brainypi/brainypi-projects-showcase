const {
    tailwindPlugin,
} = require('./src/plugins');

module.exports = {
    title: 'BrainyPi Projects',
    tagline: 'BrainyPi Projects Showcase',
    url: 'https://brainypi.github.io',
    baseUrl: '/brainypi-projects-showcase/',
    favicon: 'img/favicon.ico',
    organizationName: 'brainypi', // Usually your GitHub org/user name.
    projectName: 'brainypi-projects-showcase', // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    onDuplicateRoutes: 'warn',
    themeConfig: {
        announcementBar: {
            id: 'announcementBar-2',
            content:
            '<span style=" font-size:16pt;"><b>To be launched by 24th Oct 2022</b></span>',
            isCloseable: false,
            backgroundColor: '#b6d0b9',
            textColor: '#091E42',
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            hideOnScroll: true,
            title: 'BrainyPi Projects',
            logo: {
                alt: 'IoTIoT-logo',
                src: 'img/logo.png',
            },
            items: [
                { href: 'https://forum.brainypi.com', label: 'Forum', position: 'right', },
            ],
        },
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        footer: {
            style: 'dark',
            links: [
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Shunya OS, Inc.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    sidebarCollapsible: false,
                },
                theme: {
                    customCss: require.resolve('./src/css/tailwind.css'),
                },
            },
        ],
    ],
    plugins: [
        tailwindPlugin,
    ],
};
