import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  lang: 'zh-CN',
  title: 'catnull',
  description: '业精于勤荒于嬉,知识点速记',
  head: [
    ['link', { rel: 'icon', href: '/images/photo.png' }],
    ['meta', { name: 'theme-color', content: '#0084ff' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['meta', { name: 'msapplication-TileImage', content: '/images/photo' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
  themeConfig: {
    lastUpdated: true,
    logo: 'https://vuejs.org/images/logo.png',
    docsDir: 'docs',
    plugins: [
      [
        '@vuepress/plugin-docsearch',
        {
          apiKey: '3a539aab83105f01761a137c61004d85',
          indexName: 'vuepress',
          searchParameters: {
            facetFilters: ['tags:v2'],
          },
          locales: {
            '/zh/': {
              placeholder: '搜索文档',
            },
          },
        },
      ],
      ['@vuepress/plugin-pwa'],
      [
        '@vuepress/plugin-pwa-popup',
        {
          locales: {
            '/zh/': {
              message: '发现新内容可用',
              buttonText: '刷新',
            },
          },
        },
      ],
    ],
    navbar: [
      { text: '首页', link: './README.md' },
      { text: '框架', link: '/framework/' },
      { text: '前端', link: '/front-end/' },
      { text: '后端', link: '/back-end/' },
      { text: '算法', link: '/other/' },
      { text: '设计', link: '/design/' },
      { text: 'Blog', link: 'http://blog.catnull.com' },
      { text: 'Github', link: 'https://github.com/catnulls' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/framework/': [
        {
          text: '框架',
          link: '/framework/',
          children: [
            {
              text: 'React',
              children: ['/framework/react/README.md'],
            },
            {
              text: 'Vue',
              children: ['/framework/vue/README.md'],
            },
          ],
        },
      ],
      '/front-end/': [
        {
          text: '前端',
          children: [
            {
              text: '基础',
              children: [
                '/front-end/Common/DOM.md',
                '/front-end/Common/BOM.md',
                '/front-end/Common/Object.md',
                '/front-end/Common/Function.md',
                '/front-end/Common/Array.md',
                '/front-end/Common/String.md',
                '/front-end/Common/README.md',
              ],
            },
            {
              text: '样式',
              children: ['/front-end/Css/README.md'],
            },
            {
              text: 'ECMAScript',
              children: ['/front-end/ECMAScript/README.md'],
            },
            {
              text: 'JS',
              children: [
                '/front-end/JS/高阶函数.md',
                '/front-end/JS/柯里化.md',
                '/front-end/JS/Async_Await.md',
                '/front-end/JS/Promise.md',
                '/front-end/JS/README.md',
              ],
            },
            {
              text: '正则表达式',
              children: ['/front-end/RegEx/README.md'],
            },
            {
              text: '工具',
              children: [
                '/front-end/Utils/webpack.md',
                '/front-end/Utils/README.md',
              ],
            },
            {
              text: '其他',
              children: [
                '/front-end/other/browser.md',
                '/front-end/other/性能优化.md',
                '/front-end/other/网络请求.md',
                '/front-end/other/README.md',
              ],
            },
          ],
        },
      ],
      '/back-end/': [
        {
          text: '后端',
          link: '/back-end/',
          children: [
            {
              text: 'Nodejs',
              children: ['/back-end/nodejs/README.md'],
            },
            {
              text: 'Nestjs',
              children: ['/back-end/nestjs/README.md'],
            },
            {
              text: 'MongoDB',
              children: ['/back-end/mongo/README.md'],
            },
            {
              text: 'Redis',
              children: ['/back-end/redis/README.md'],
            },
            {
              text: 'Docker',
              children: ['/back-end/docker/README.md'],
            },
          ],
        },
      ],
      '/flutter/': [
        {
          text: 'Flutter',
          children: [
            {
              text: '组件',
              children: ['/back-end/components/README.md'],
            },
          ],
        },
      ],
    },
  },
})
