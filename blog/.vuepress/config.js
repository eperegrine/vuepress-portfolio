module.exports = {
  title: 'Emily Peregrine',
  description: 'Emily is a talented software developer with experience in web and game development',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    directories: [
      {
        id: 'blog',
        dirname: '_blog',
        path: '/blog/',
      },
      {
        id: 'projects',
        dirname: '_projects',
        path: '/projects/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'Projects',
        link: '/projects/',
      },
      {
        text: 'Tags',
        link: '/tag/',
        exact: true
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/eperegrine',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/emily_peregrine',
        },
      ],
      copyright: [
        {
          text: 'MIT Licensed | Copyright © 2020-present Emily Peregrine',
          link: '',
        },
      ],
    },
  },
}