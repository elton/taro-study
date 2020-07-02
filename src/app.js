import { Component } from 'react'
import './app.scss'

class App extends Component {

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

// 每一个入口组件都必须导出一个 React 组件
export default App
