import React from 'react'
import ReactDOM from 'react-dom'
import '@/style/style.less'
import App from '@/App'
import './style/font.less'

ReactDOM.render(<App />, document.getElementById('app'))

// @ts-ignore
module.hot.accept()
