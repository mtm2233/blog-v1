<template>
  <div>
    <el-container class="home-main">
      <el-main class="fade-enter-active">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <!--侧边栏-->
      <el-aside class="hidden-sm-and-down" min-width="270px">
        <div class="scrollBox">
          <h3>分类</h3>
          <el-menu
            :default-active="$store.state.typeId"
            :unique-opened="true"
            :default-openeds="[typeIdP]"
          >
            <!--一级菜单-->
            <el-submenu :index="item.typeId + ''" v-for="item in rightMenusList" :key="item.typeId">
              <!--一级菜单都模板区域-->
              <template slot="title">
                <!--文本-->
                <span>{{item.type}}</span>
              </template>
              <!--二级菜单-->
              <el-menu-item
                :index="subItem.typeId+''"
                v-for="subItem in item.children"
                :key="subItem.typeId"
                @click="changeTypeIdP(subItem.typeId+'',item.typeId+'')"
              >
                <template slot="title">
                  <!--文本-->
                  <span>{{subItem.type}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
          <!-- 作品集 -->
          <h3>作品集</h3>
          <a href="https://demo.isdream.cn" target="_blank">
            <el-button type="info" plain>点击进入</el-button>
          </a>
          <!-- 最新评论 -->
          <h3>最新评论</h3>
          <replys :repysList="NewReplyList" :pName="''" :addReply="false"></replys>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import replys from '../components/replys.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      // 右侧菜单列表
      rightMenusList: [],
      typeIdP: '20',
      // 最新评论列表
      NewReplyList: []
    }
  },
  methods: {
    // 获取右侧导航栏
    async getRightMenus() {
      const { data: res } = await this.$http.get('menus/query')
      if (res.status !== 200) return this.$message.error('获取右侧导航栏失败')
      this.rightMenusList = res.data
    },
    // 获取最新的评论
    async getNewReplyList() {
      const { data: res } = await this.$http.get('reply/latest/4')
      if (res.status !== 200) return this.$message.error('获取最新评论失败')
      this.NewReplyList = res.data
    },
    changeTypeIdP(typeId, typeIdP) {
      this.typeIdP = typeIdP
      this.changeTypeId(typeId)
    },
    ...mapMutations(['changeTypeId'])
  },
  mounted() {
    this.getRightMenus()
    this.getNewReplyList()
  },
  components: {
    replys
  }
}
</script>
<style scoped>
.el-aside {
  padding-left: 20px;
  height: 100%;
  position: relative;
}
.scrollBox {
  width: 270px;
  top: 73px;
  bottom: 60px;
  padding: 0 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  box-sizing: border-box;
}
h3 {
  margin: 0;
  border-bottom: 1px solid #d0d6d9;
  font-size: 18px;
  line-height: 35px;
  margin-bottom: 10px;
}
.el-menu {
  border-right: 0;
}
.home-main {
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  /* padding: 15px; */
}
.el-main {
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
}
.el-button {
  width: 95%;
  margin: 10px 0;
}
ul {
  list-style: none;
  padding-left: 0px;
}
</style>
