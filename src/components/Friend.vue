<!--
 * @Description:
 * @Author: mTm
 * @Date: 2021-01-01 14:51:28
 * @LastEditTime: 2021-01-01 16:59:46
 * @LastEditors: mTm
-->
<template>
  <div id="friend" class="fade-enter-active">
    <div class="navTop">
      <h2>友情链接</h2>
      <h4>博主的网上邻居</h4>
    </div>
    <el-row :gutter="10" v-for="item in friendList" :key="item.urlTypeId">
      <h3>#{{item.typeName}}</h3>
      <el-col :xs="12" :sm="8" :lg="6" v-for="itemChild in item.children" :key="itemChild.friendId">
        <a :href="itemChild.url" target="_blank" :title="itemChild.descript">
          <el-card :body-style="{ padding: '5px' }">
            <img :src="itemChild.icon" :onerror="errorGoodsImg" />
            {{itemChild.name}}
          </el-card>
        </a>
      </el-col>
    </el-row>
    <!-- 友链说明 -->
    <div class="desc">
      <h4>友链要求：</h4>
      <p>1.文章数目大于30篇，原创文章必须高于50%</p>
      <p>2.博客拥有独立的域名</p>
      <p>3.博客内无违法违规内容</p>
      <p>4.原则上不接受没有在本站留过言突然冒出来要求加友链的</p>
      <p>5.博主的好基友可以无视上面的所有要求</p>
      <p>如果您的网站满足上述要求，可在下方留言板申请友链。</p>
      <h4>格式</h4>
      <p>网站地址：</p>
      <p>网站名称：</p>
      <p>网站描述：</p>
      <p>网站ico图标：</p>
      <h4>本站信息：</h4>
      <p>名称：梦就是梦</p>
      <p>简介：你总是一副不开心的样子(#`O′)</p>
      <p>连接：https://isdream.cn/</p>
      <p>头像：https://api.isdream.cn/img/favicon.ico/</p>
    </div>
    <!-- 评论 -->
    <reply artId="2009"></reply>
  </div>
</template>
<script>
// 评论组件
import reply from './reply.vue'
export default {
  name: 'friend',
  data() {
    return {
      friendList: [],
      errorGoodsImg: `this.src='${require('../assets/img/frErr.png')}'`
    }
  },
  methods: {
    async getFriends() {
      const { data: res } = await this.$http.get('friend/query')
      if (res.status !== 200) return this.$message.error('获取友链失败')
      this.friendList = res.data
    }
  },
  components: {
    reply
  },
  mounted() {
    this.getFriends()
  }
}
</script>
<style scoped>
#friend {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 55px;
  padding: 0 15px;
  box-sizing: border-box;
}
img {
  width: 35px;
  vertical-align: middle;
  margin-right: 5px;
}
a {
  text-decoration: none;
}
.el-card {
  margin: 10px;
  font-size: 15px;
}
.el-card:hover {
  color: #fd5d3c;
}
.desc {
  margin-top: 30px;
}
</style>
