import './assets/main.scss'
import bodyTplFn from './template/body.tpl'
import headTplFn from './template/head.tpl'
import footerTplFn from './template/footer.tpl'
import axios from 'axios'

// 两个容器
const _content = document.querySelector('#content')
const _loading = document.querySelector('#loading')

// loading
if (document && _loading) {
  _loading.innerHTML = 'loading...'
}

// 获取数据渲染
axios.get('https://www.easy-mock.com/mock/5c9dbda0bca325336a73bffc/mock/activity').then((res) => {
  const { data = {} } = res
  const {
    title = '',
    subtitle = '',
    list = '',
    styleNight = '',
    headBlack = '',
    headWhite = '',
    needFooter = '',
    footer = '',
    city = '',
    entryimg = ''
  } = data
  const bodyHtml = bodyTplFn({
    title,
    subtitle,
    list,
    city,
    entryimg
  }) // string
  const headHtml = headTplFn({
    styleNight,
    headBlack,
    headWhite
  }) // string
  const footerHtml = footerTplFn({
    needFooter,
    footer
  }) // string
  const html = headHtml + bodyHtml + footerHtml

  if (document && _content) {
    // 移除loading
    _loading && _loading.parentNode.removeChild(_loading)
    // 显示主体数据
    _content.innerHTML = html
  }
})
