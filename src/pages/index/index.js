import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

import Menu from '../../components/menu/menu'

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  };
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillMount() { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Menu />
      </View>
    )
  }
}

export default Index
