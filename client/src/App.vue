<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1 class="logo-wrap">
          <i class="icon-element-logo iconfont"></i>
        </h1>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <xmenu/>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>{{breadcrumbValue}}</el-breadcrumb-item> -->
            <el-breadcrumb-item>{{getRouter.text}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
// views  存放路由组价
// components 单元组件 页面中某个区域的组件
import { Vue, Component, Prop } from "vue-property-decorator";
import xmenu from "@/components/menu/x-menu.vue";
import { mapState } from 'vuex'
console.dir( mapState )
// console.log( ...mapMutations )
@Component({
  components: {
    xmenu
  },
  computed: {
    ...mapState([ 
      'getRouter'
    ])
  }
})
export default class App extends Vue {
  //  类的属性 等于 组件中的 data
  name: string = "hahahah";

  say() {
    // this.$store.dispatch('increment')
  }

  mounted () {
    console.log( this )
  }
  // get breadcrumbValue () {
  //   return this.$store.state.getRouter.text
  // }

}
</script>

<style scoped lang="less">
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-wrap {
    color: @blue;
    .iconfont {
      font-size: 30px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-dropdown-link {
    display: block;
    height: 100%;
  }
}
.icons {
  font-size: 20px;
}
</style>