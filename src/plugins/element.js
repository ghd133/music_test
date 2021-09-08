/*
 * @Author: your name
 * @Date: 2021-08-08 10:28:40
 * @LastEditTime: 2021-09-06 11:04:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\shopdemo\src\plugins\element.js
 */
import Vue from 'vue'
import {
  Button,
  Input,
  Row,
  Col,
  Menu,
  MenuItem,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Card,
  Backtop,
  Image,
  Form,
  FormItem,
  Loading,
  Badge,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Avatar,
  Dialog,
} from 'element-ui'

const components = [
  Input,
  Row,
  Col,
  Menu,
  MenuItem,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Card,
  Backtop,
  Image,
  Form,
  FormItem,
  Loading,
  Badge,
  Button,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Avatar,
  Dialog,
]
components.forEach(item => {
  Vue.use(item)
})

//用此方法按需引入
import { Message ,MessageBox} from 'element-ui'
Vue.component(Message.name, Message)
Vue.prototype.$message = Message

Vue.component(MessageBox.name, MessageBox)
Vue.prototype.$confirm = MessageBox.confirm

Vue.prototype.$msgbox = MessageBox;