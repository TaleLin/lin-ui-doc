const highlight = require('./public/js/highlight')

module.exports = {
  title:'Lin UI',
  evergreen: false,
  host: 'localhost',
  port: 3000,
  base:'/',
  dest:'./dist',
  head:[
    ['link',{
      rel:'icon',
      href:'/favicon.ico'
    }],[
      "script",
      {
        src:"https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.min.js"
      }
    ]
  ],
  chainMarkdown (config) {
    config
      .options
      .highlight(highlight)
      .end()
  },
  themeConfig: {
    sidebarDepth: 0,
    logo: '/images/left-logo.png',
    lastUpdated: '上次更新',
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
        link: '/component/'
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
        text: '慕课课程',
        link: '/imooc/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/TaleLin/lin-ui'
      },
      {
        text: '版本日志',
        link: '/update/'
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
            'view/arc-popup'
          ]
        },
        {
          title: '导航',
          collapsable: false,
          children: [
            'nav/segment',
            'nav/tabs',
            'nav/combined-tabs'
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
            'form/form'
          ]
        },
        {
          title: '电商专题',
          collapsable: false,
          children: [
            'shopping/price',
            'shopping/count-selector',
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
