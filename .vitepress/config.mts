import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "orange-office.online",
  description: "website for orange-office.online",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Excel 精品课', link: '/excel' },
      { text: 'PowerPoint 精品课', link: '/powerpoint' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'office 精品课',
        items: [
          { text: 'Excel 精品课', link: '/excel' },
          { text: 'PowerPoint 精品课', link: '/powerpoint' },
          { text: '关于安迪老师', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orange-office' }
    ]
  }
})
