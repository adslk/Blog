module.exports = {
  "title": "Record Life",
  "description": "Code note and everyday essays",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/code.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // 项目开始时间，只填写年份
    startYear: '2020',
    themePicker: {
      colorName1: '#0033FF', // 极浓海蓝
      colorName2: '#8B00FF', // 紫罗兰色
      colorName3: '#00BFFF', // 深天蓝
      colorName4: '#FF8C00' // 暗橙
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/",
            "icon": "reco-github"
          },
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/0d235c4d913b",
            "icon": "reco-jianshu"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/recoluan",
            "icon": "reco-csdn"
          },
          {
            "text": "Bilibili",
            "link": "https://space.bilibili.com/101742699",
            "icon": "reco-bokeyuan"
          },
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 5,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "adslk",
    "authorAvatar": "/avatar.gif",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}