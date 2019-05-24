import Taro, {Component} from '@tarojs/taro';
import {View, Text, Image} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {AtDrawer} from 'taro-ui';
import './menu.scss';
import {showDrawer, changeCata, hideDrawer} from '../../actions/menu';

@connect(function (store) {
  return {...store.menu}
}, function (dispatch) {
  return {
    showMenu() {
      dispatch(showDrawer())
    },
    hideDrawer() {
      dispatch(hideDrawer())
    },
    changeCata(cata) {
      dispatch(changeCata(cata))
    }
  }
})
class Menu extends Component {
  //显示抽屉
  showDrawer() {
    this.props.showMenu && this.props.showMenu();
  }

  getItems(cataData) {
    return cataData.map(item => item.value);
  }

  //点击分类时触发
  clickCata(index) {
    let {cataData} = this.props;
    let clickCata = cataData[index];//获取点击项的数据
    this.props.changeCata && this.props.changeCata(clickCata);//点击分类 触发切换分类方法
    /* if(clickCata.key!==this.props.currentCata.key){
       this.props.changeCata&&this.props.changeCata(clickCata);//点击分类 触发切换分类方法
     }*/
  }

  //关闭抽屉时触发
  closeDrawer() {
    this.props.hideDrawer && this.props.hideDrawer();
  }

  render() {
    let {cataData} = this.props;
    let items = this.getItems(cataData);//获取分类列表
    return (
      <View>
        <AtDrawer
          onClose={this.closeDrawer.bind(this)}
          onItemClick={this.clickCata.bind(this)}
          style='position:absolute;'
          show={showDrawer}
          items={items}
        />
        <View className='topiclist-menu'>
          <Image
            onClick={this.showDrawer.bind(this)}
            className='image  left'
            src={require('../../assets/img/cata.png')}
          />
          <Text>{this.props.currentCata ? this.props.currentCata.value : ''}</Text>
          <Image
            className='image right'
            src={require('../../assets/img/login.png')}
          />
        </View>
      </View>
    )
  }
}

export default Menu;
