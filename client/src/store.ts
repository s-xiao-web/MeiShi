import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuData: [
      {
        "text": "首页",
        "name": "/"
      },
      {
        "text": "用户",
        "name": "/user"
      }
    ],
    getRouter: {}
  },
  mutations: {
    getRouterFn (state, arg) {
      const _d = state.menuData.find( item => item.name === arg)
      if (_d) {      
        state.getRouter = _d
      } else {
        state.getRouter = state.menuData[0]
      }
    }
  },
  actions: {
    increment () {
      alert(1)
    }
  }
})



// import Vue from 'vue'
// import Component from 'vue-class-component'
// import {
//   State,
//   Getter,
//   Action,
//   Mutation,
//   namespace
// } from 'vuex-class'

// const someModule = namespace('path/to/module')

// @Component
// export class MyComp extends Vue {
//   @State('foo') stateFoo
//   @State(state => state.bar) stateBar
//   @Getter('foo') getterFoo
//   @Action('foo') actionFoo
//   @Mutation('foo') mutationFoo
//   @someModule.Getter('foo') moduleGetterFoo

//   // If the argument is omitted, use the property name
//   // for each state/getter/action/mutation type
//   @State foo
//   @Getter bar
//   @Action baz

//   created () {
//     this.stateFoo // -> store.state.foo
//     this.stateBar // -> store.state.bar
//     this.getterFoo // -> store.getters.foo
//     this.actionFoo({ value: true }) // -> store.dispatch('foo', { value: true })
//     this.mutationFoo({ value: true }) // -> store.commit('foo', { value: true })
//     this.moduleGetterFoo // -> store.getters['path/to/module/foo']
//   }
// }