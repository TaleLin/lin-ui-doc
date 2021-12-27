const highlight = require('./public/js/highlight')

module.exports = {
  title: 'Lin UI',
  description: 'Lin UI 是基于微信小程序原生语法 实现的组件库。遵循简洁、易用的设计规范。',
  host: 'localhost',
  port: 3000,
  base: '/',
  dest: './dist',
  plugins: [
    'vuepress-plugin-medium-zoom',
    ['vuepress-plugin-container', {
      type: 'img',
      before: info => `<div class="l-img">`,
      after: '</div>'
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: '有新内容啦~',
        buttonText: '刷新'
      },
      generateSWConfig: {
        importWorkboxFrom: 'local'
      }
    }]
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3a63bd' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3A63BD' }],
    ["script", { async: true, type: "text/javascript", src: "https://s9.cnzz.com/z_stat.php?id=1279053128&web_id=1279053128" }],
    ["script", { async: true, type: "text/javascript", src: "https://hm.baidu.com/hm.js?8628fff92d16599a4cb40c15288bf5e3" }]
  ],
  chainMarkdown(config) {
    config
      .options
      .highlight(highlight)
      .end()
  },
  themeConfig: {
    sidebarDepth: 0,
    smoothScroll: true,
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '纠正错误',
    repo: "TaleLin/lin-ui",
    docsRepo: "TaleLin/lin-ui-doc",
    docsBranch: 'master',
    logo: '/images/left-logo.png',
    nav: [
      {
        text: '介绍',
        link: '/'
      },
      {
        text: '入门',
        link: '/start/'
      },
      {
        text: '组件',
        link: '/component/basic/button'
      },
      {
        text: '过滤器',
        link: '/filter/'
      },
      {
        text: '函数库',
        link: '/function/'
      },
      {
        text: '脚手架',
        link: '/cli/'
      },
      {
        text: '慕课课程',
        link: '/imooc/'
      },
      {
        text: '更新日志',
        link: 'https://github.com/TaleLin/lin-ui/releases'
      }
    ],
    sidebar: {
      '/start/': [
        {
          title: '入门',
          collapsable: false,
          children: [
            '/start/',
            '/start/QA',
            '/start/component',
            '/start/event',
            '/start/class',
            '/start/contribute',
            '/start/wx'
          ]
        }, {
          title: '高级特性',
          collapsable: false,
          children: [
            '/start/open-function'
          ]
        }
      ],
      '/component/': [
        {
          title: '基础',
          collapsable: false,
          children: ['basic/button', 'basic/icon']
        },
        {
          title: '动画',
          collapsable: false,
          children: ['animation/transition']
        },
        {
          title: '布局',
          collapsable: false,
          children: [
            'layout/list',
            'layout/index-list',
            'layout/grid',
            'layout/card',
            'layout/water-flow',
            'layout/album',
            'layout/sticky',
            'layout/collapse'
          ]
        },
        {
          title: '视图',
          collapsable: false,
          children: [
            'view/avatar',
            'view/badge',
            'view/countdown',
            'view/loading',
            'view/loadmore',
            'view/mask',
            'view/notice-bar',
            'view/popup',
            'view/progress',
            'view/status-show',
            'view/tag',
            'view/steps',
            'view/skeleton',
            'view/arc-popup',
            'view/circle'
          ]
        },
        {
          title: '导航',
          collapsable: false,
          children: [
            'nav/segment',
            'nav/tabs',
            'nav/combined-tabs',
            'nav/capsule-bar',
            'nav/tab-bar.md'
          ]
        },
        {
          title: '操作反馈',
          collapsable: false,
          children: [
            'response/toast',
            'response/dialog',
            'response/message',
            'response/slide-view',
            'response/action-sheet',
          ]
        },
        {
          title: '表单',
          collapsable: false,
          children: [
            'form/input',
            'form/textarea',
            'form/radio',
            'form/checkbox',
            'form/image-picker',
            'form/rules',
            'form/rate',
            'form/form',
            'form/image-clipper',
            'form/calendar',
            'form/switch'
          ]
        },
        {
          title: '电商专题',
          collapsable: false,
          children: [
            'shopping/price',
            'shopping/counter',
            'shopping/search'
          ]
        }],
      '/function/': [
        {
          title: '函数库',
          collapsable: false,
          children: [
            '/function/',
            '/function/px2rpx'
          ]
        }
      ],
      '/cli/': [
        {
          title: '脚手架',
          collapsable: false,
          children: [
            '/cli/',
            '/cli/introduce'
          ]
        }
      ],
      '/filter/': [
        {
          title: '过滤器',
          collapsable: false,
          children: [
            '/filter/',
          ]
        },
        {
          title: '基本',
          collapsable: true,
          children: [
            '/filter/string',
            '/filter/array',
            '/filter/is',
          ]
        },
        {
          title: '业务型',
          collapsable: true,
          children: [
            '/filter/classnames',
          ]
        }
      ]
    }
  }
};
