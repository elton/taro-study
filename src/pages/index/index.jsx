import { View } from '@tarojs/components'
import React, { Component } from 'react'
import './index.scss'

export default class Index extends Component {
  state = {
    msg:'Hello,world!!'
  }

  componentDidMount() {
    console.log("ComponentDidMount")
    this.setState({
      msg:"Hello again."
    })
  }
  
// 当返回true才会调用render()方法，多个state被更新的时候，当必要的时候才调用。以便提升性能
  shouldComponentUpdate() {
    
  }

  render () {
    return (
      <View className='index'>
        {this.state.msg}
      </View>
    )
  }
}
