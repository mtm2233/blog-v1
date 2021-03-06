import Vue from 'vue'
import {
  Container, Header, Main, Footer, Aside, Row, Col, Menu, MenuItem,
  Message, MessageBox, Input, Drawer, Carousel, CarouselItem,
  MenuItemGroup, Submenu, Card, Pagination, Button, Tag,
  Form, FormItem, Alert, Table, TableColumn, Backtop, Icon, Image,
  Tabs, TabPane, Popover
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Drawer)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Backtop)
Vue.use(Icon)
Vue.use(Image)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Popover)

// 全局挂载
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
