<template>
  <div class="wrapper">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
        background-color='#303133'
        text-color='#b1b1b1'
        router
        :default-active=setRouter
        >
          <el-menu-item v-for="(menu,index) of menuList"  :index="menu.name" :key="index" >
            <i class="el-icon-menu"></i>
            <span slot="title">{{menu.text}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>  
  </div>
</template>

<script lang="ts">
import {mapState} from 'vuex'
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class XMenu extends Vue{
  menuList: any[] = []

  // get mapState () {
  //   setRouter: state => state.getRouter.name,
  // }
  get setRouter() {
    return this.$store.state.getRouter.name
  }

  // get menuData () {
  //   return  this.$store.state.menuData
  // }
  created() {
    this.menuList = this.$store.state.menuData
  }
}
</script>
<style lang="less" scoped>

</style>